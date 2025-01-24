import React from "react"
import { PlayIcon, Share2Icon } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="#4CAF50"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>PLAYCODE</span>
        </div>
        <button className="nav-button">
          <PlayIcon size={16} />
          React Playground
        </button>
        <button className="nav-button">
          <Share2Icon size={16} />
          Share
        </button>
      </div>
      <div className="nav-right">
        <button className="nav-button">Learn</button>
        <button className="nav-button">Sign In</button>
        <button className="nav-button primary">Sign Up</button>
      </div>
    </nav>
  )
}

