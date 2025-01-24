import React from "react"
import { X } from "lucide-react"

export default function Console() {
  return (
    <div className="console">
      <div className="console-header">
        <span>Console</span>
        <button className="close-button">
          <X size={14} />
        </button>
      </div>
      <div className="console-content">
        <div className="console-line">
          <span className="console-arrow">▶</span>
          <span className="console-text">Hello console</span>
        </div>
      </div>
    </div>
  )
}

