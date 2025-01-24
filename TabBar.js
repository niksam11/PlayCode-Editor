import React from "react"
import { X } from "lucide-react"

export default function TabBar({ files, activeFile, onTabClick }) {
  return (
    <div className="tab-bar">
      {files.map((file) => (
        <div key={file} className={`tab ${activeFile === file ? "active" : ""}`} onClick={() => onTabClick(file)}>
          <span>{file}</span>
          <button className="close-tab">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}

