import React from "react"
import { ChevronDown, File, Folder, Package, Plus } from "lucide-react"

export default function FileExplorer() {
  return (
    <div className="file-explorer">
      <div className="explorer-section">
        <div className="section-header">
          <span>FILES</span>
          <button className="add-button">
            <Plus size={16} />
          </button>
        </div>
        <div className="file-tree">
          <div className="folder">
            <div className="folder-header">
              <ChevronDown size={16} />
              <Folder size={16} />
              <span>src</span>
            </div>
            <div className="folder-content">
              <div className="file">
                <File size={16} />
                <span>App.jsx</span>
              </div>
              <div className="file">
                <File size={16} />
                <span>index.jsx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="explorer-section">
        <div className="section-header">
          <span>PACKAGES</span>
          <button className="add-button">
            <Plus size={16} />
          </button>
        </div>
        <div className="package-list">
          <div className="package">
            <Package size={16} />
            <span>react</span>
          </div>
          <div className="package">
            <Package size={16} />
            <span>react-dom</span>
          </div>
        </div>
      </div>
    </div>
  )
}

