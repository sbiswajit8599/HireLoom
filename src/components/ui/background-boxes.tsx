"use client";

import {
    useMemo,
    useRef,
    useState,
    useLayoutEffect,
    useEffect,
    useCallback,
    type CSSProperties,
} from "react";
import { motion } from "framer-motion";

const DEFAULT_COLORS = [
    "#8028E4",
    "#8028E4",
    "#8028E4",
    "#8028E4",
    "#8028E4",
    "#8028E4",
];

const PERSPECTIVE = 1000;

function screenToPlane(
    sx: number,
    sy: number,
    yawDeg: number,
    pitchDeg: number,
    p = PERSPECTIVE
): { x: number; y: number } | null {
    const a = (yawDeg * Math.PI) / 180;
    const b = (pitchDeg * Math.PI) / 180;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const cb = Math.cos(b);
    const sb = Math.sin(b);

    const a11 = p * ca - sx * sa * cb;
    const a12 = sx * sb;
    const a21 = p * sa * sb - sy * sa * cb;
    const a22 = p * cb + sy * sb;

    const det = a11 * a22 - a12 * a21;
    if (!isFinite(det) || Math.abs(det) < 1e-6) return null;

    const b1 = sx * p;
    const b2 = sy * p;
    return {
        x: (b1 * a22 - a12 * b2) / det,
        y: (a11 * b2 - b1 * a21) / det,
    };
}

interface Cell {
    id: number;
    row: number;
    col: number;
    color: string;
}

interface Rotate {
    x?: number;
    y?: number;
}

interface ColorsProp {
    paletteCount?: number;
    [key: string]: string | number | undefined;
}

interface BackgroundBoxesProps {
    backgroundColor?: string;
    boxSize?: number;
    borderWidth?: number;
    borderColor?: string;
    rotate?: Rotate;
    colors?: ColorsProp;
    style?: CSSProperties;
}

export default function BackgroundBoxes({
    backgroundColor = "rgba(0,0,0,1)",
    boxSize = 40,
    borderWidth = 2,
    borderColor = "rgba(255,255,255,0.2)",
    rotate = { x: 0, y: 0 },
    colors: colorsProp = {
        paletteCount: 6,
        color1: "#8028E4",
        color2: "#8028E4",
        color3: "#8028E4",
        color4: "#8028E4",
        color5: "#8028E4",
        color6: "#8028E4",
    },
    style,
}: BackgroundBoxesProps) {
    const outDuration = 0.8;

    const containerRef = useRef<HTMLDivElement>(null);
    const [rows, setRows] = useState(35);
    const [cols, setCols] = useState(35);

    const swingX = rotate?.x ?? 0;
    const swingY = rotate?.y ?? 0;

    const colors = useMemo(() => {
        const entries: string[] = [];
        if (colorsProp) {
            const count = Math.max(
                1,
                Math.min(10, colorsProp.paletteCount || 6)
            );
            for (let i = 1; i <= count; i++) {
                const value = colorsProp[`color${i}`];
                if (typeof value === "string" && value.trim().length > 0) {
                    entries.push(value.trim());
                }
            }
        }
        if (entries.length === 0) return DEFAULT_COLORS;
        return entries;
    }, [colorsProp]);

    const getRandomColor = useCallback(() => {
        if (colors.length === 0) return DEFAULT_COLORS[0];
        return colors[Math.floor(Math.random() * colors.length)];
    }, [colors]);

    const calculateGrid = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const w = container.clientWidth || container.offsetWidth || window.innerWidth;
        const h = container.clientHeight || container.offsetHeight || window.innerHeight;
        setCols(Math.max(1, Math.ceil(w / boxSize)));
        setRows(Math.max(1, Math.ceil(h / boxSize)));
    }, [boxSize]);

    useLayoutEffect(() => {
        calculateGrid();
        window.addEventListener("resize", calculateGrid);
        return () => window.removeEventListener("resize", calculateGrid);
    }, [calculateGrid]);

    const gridWidth = cols * boxSize;
    const gridHeight = rows * boxSize;

    const border = borderWidth
        ? `${borderWidth}px solid ${borderColor}`
        : undefined;

    const [lit, setLit] = useState<Cell | null>(null);
    const [fading, setFading] = useState<Cell[]>([]);
    const idRef = useRef(0);
    const prevLitRef = useRef<Cell | null>(null);

    // Track state transition from lit to fading cleanly
    useEffect(() => {
        if (prevLitRef.current && prevLitRef.current !== lit) {
            const oldCell = prevLitRef.current;
            setFading((prev) => [...prev.slice(-25), oldCell]);
        }
        prevLitRef.current = lit;
    }, [lit]);

    // Clean up fading cells after outDuration
    useEffect(() => {
        if (fading.length === 0) return;
        const timer = setTimeout(() => {
            setFading((prev) => prev.slice(1));
        }, outDuration * 1000);
        return () => clearTimeout(timer);
    }, [fading.length, outDuration]);

    const leave = useCallback(() => {
        setLit(null);
    }, []);

    // Global pointermove listener tracks cursor position across entire viewport/container rect
    useLayoutEffect(() => {
        const onPointerMove = (event: PointerEvent) => {
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();

            if (
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom
            ) {
                leave();
                return;
            }

            const sx = event.clientX - rect.left - rect.width / 2;
            const sy = event.clientY - rect.top - rect.height / 2;

            const point = screenToPlane(sx, sy, swingX, swingY);
            if (!point) return leave();

            const gx = point.x + gridWidth / 2;
            const gy = point.y + gridHeight / 2;
            const col = Math.floor(gx / boxSize);
            const row = Math.floor(gy / boxSize);

            if (col < 0 || col >= cols || row < 0 || row >= rows) {
                leave();
                return;
            }

            setLit((current) => {
                if (current && current.row === row && current.col === col) {
                    return current;
                }
                return {
                    id: ++idRef.current,
                    row,
                    col,
                    color: getRandomColor(),
                };
            });
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("mouseleave", leave);
        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("mouseleave", leave);
        };
    }, [
        swingX,
        swingY,
        gridWidth,
        gridHeight,
        boxSize,
        cols,
        rows,
        getRandomColor,
        leave,
    ]);

    const boxes = useMemo(() => {
        const rowsArray = new Array(rows).fill(1);
        const colsArray = new Array(cols).fill(1);
        return rowsArray.map((_, i) => (
            <div
                key={`row-${i}`}
                style={{
                    display: "flex",
                    borderLeft: border,
                    borderBottom: i === rows - 1 ? border : undefined,
                }}
            >
                {colsArray.map((_, j) => (
                    <div
                        key={`col-${j}`}
                        style={{
                            width: `${boxSize}px`,
                            height: `${boxSize}px`,
                            flexShrink: 0,
                            boxSizing: "border-box",
                            borderRight: border,
                            borderTop: border,
                        }}
                    />
                ))}
            </div>
        ));
    }, [rows, cols, boxSize, border]);

    const cellStyle = (cell: Cell): CSSProperties => ({
        position: "absolute",
        left: cell.col * boxSize,
        top: cell.row * boxSize,
        width: boxSize,
        height: boxSize,
        backgroundColor: cell.color,
        pointerEvents: "none",
        zIndex: 2,
    });

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    perspective: `${PERSPECTIVE}px`,
                    perspectiveOrigin: "center center",
                    transformStyle: "preserve-3d",
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        transform: `translate(-50%, -50%) rotateY(${swingX}deg) rotateX(${swingY}deg)`,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        display: "flex",
                        flexDirection: "column",
                        transformOrigin: "center center",
                        width: `${gridWidth}px`,
                        height: `${gridHeight}px`,
                        zIndex: 0,
                    }}
                >
                    {boxes}
                    {fading.map((cell) => (
                        <motion.div
                            key={cell.id}
                            initial={{ opacity: 0.85 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: outDuration, ease: "easeOut" }}
                            style={cellStyle(cell)}
                        />
                    ))}
                    {lit && (
                        <motion.div
                            key={lit.id}
                            initial={{ opacity: 0.9 }}
                            animate={{ opacity: 0.9 }}
                            style={cellStyle(lit)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
