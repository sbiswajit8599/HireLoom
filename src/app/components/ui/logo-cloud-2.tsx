import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "./utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, children, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 lg:grid-cols-5 border-black/[0.08]",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-black/[0.08]" />

      {children}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-black/[0.08]" />
    </div>
  );
}

export type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  imgClassName?: string;
};

export function LogoCard({ logo, className, imgClassName, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-white px-4 py-6 md:p-7 relative transition-colors duration-200 hover:bg-zinc-50/80",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-5 sm:h-6 max-h-7 select-none object-contain max-w-[110px] sm:max-w-[130px] opacity-85 hover:opacity-100 transition-opacity",
          imgClassName
        )}
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
