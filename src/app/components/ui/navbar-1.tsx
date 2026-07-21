"use client" 

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { jakarta, inter } from "../sections/shared"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const links = ["Features", "Solutions", "AI Screening", "Pricing", "Resources"]

  return (
    <div className="flex justify-center w-full px-4 max-w-7xl mx-auto">
      <div 
        className="flex items-center justify-between px-3 py-3 rounded-full transition-all duration-300 w-full max-w-5xl relative z-10 bg-zinc-950/75 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center pl-2">
          <motion.div
            className="flex items-center gap-1.5"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="40" height="32" viewBox="0 0 128 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
              <path d="M17.8792 0L39.677 8.38283L23.262 101.477L0 101.398L17.8792 0Z" fill="white"/>
              <path d="M75.0511 0L96.8488 8.38283L80.4338 101.477L57.1719 101.398L75.0511 0Z" fill="white"/>
              <g filter="url(#filter0_n_162_11)">
                <path d="M127.296 62.9224C116.392 52.9839 102.319 45.8385 86.297 43.0785C44.3455 35.8518 6.68101 62.6235 0.000976562 101.401C8.10677 101.469 23.2608 101.469 23.2608 101.469C23.2608 101.469 56.5 45.8621 100.899 53.5106C110.45 55.1559 119.324 58.4019 127.296 62.9224Z" fill="url(#paint0_linear_162_11)"/>
              </g>
              <defs>
                <filter id="filter0_n_162_11" x="0.000976562" y="41.8986" width="127.295" height="59.5706" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="235" />
                  <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                  <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                    <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                  </feComponentTransfer>
                  <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                  <feFlood floodColor="rgba(255, 255, 255, 0.32)" result="color1Flood" />
                  <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                  <feMerge result="effect1_noise_162_11">
                    <feMergeNode in="shape" />
                    <feMergeNode in="color1" />
                  </feMerge>
                </filter>
                <linearGradient id="paint0_linear_162_11" x1="11.8342" y1="101.477" x2="128.944" y2="67.7949" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.504094" stopColor="#8028E4"/>
                  <stop offset="1" stopColor="#3F0086"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-bold text-[18px] tracking-[-0.3px] text-white" style={jakarta}>
              Hireloom
            </span>
          </motion.div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {links.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href="#" 
                className="text-[13.5px] text-zinc-300 hover:text-[#8028E4] transition-colors font-medium"
                style={inter}
              >
                {item}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#"
              className="text-[13.5px] font-medium text-zinc-300 hover:text-white transition-colors px-1"
              style={inter}
            >
              Sign In
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#8028E4] hover:bg-[#6B1FC8] text-white text-[13.5px] font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-[0_2px_8px_rgba(128,40,228,0.28)]"
              style={inter}
            >
              Book a Demo
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center p-2 -mr-2 text-white" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-0 bg-zinc-950/98 backdrop-blur-lg border-b border-white/10 z-30 pt-24 px-6 md:hidden pb-8 shadow-2xl rounded-b-3xl"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Close Button inside Overlay */}
            <motion.button
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="flex flex-col space-y-5">
              {links.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a 
                    href="#" 
                    className="block text-zinc-200 text-[15px] font-medium py-1.5 border-b border-white/5" 
                    onClick={toggleMenu}
                    style={inter}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href="#" 
                  className="text-center text-[14px] font-medium text-zinc-300 py-2 hover:text-white" 
                  onClick={toggleMenu}
                  style={inter}
                >
                  Sign In
                </a>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#8028E4] rounded-full hover:bg-[#6B1FC8] transition-colors shadow-[0_2px_8px_rgba(128,40,228,0.28)]"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.98 }}
                  style={inter}
                >
                  Book a Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
