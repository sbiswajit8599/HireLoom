"use client"

import { Navbar1 } from "../ui/navbar-1"

interface NavProps {
  onSignInClick?: () => void;
}

export default function Nav({ onSignInClick }: NavProps) {
  return (
    <div className="fixed top-4 inset-x-0 z-50 w-full flex justify-center pointer-events-none">
      <div className="w-full pointer-events-auto">
        <Navbar1 onSignInClick={onSignInClick} />
      </div>
    </div>
  )
}
