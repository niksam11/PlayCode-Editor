import React, { useState } from "react"
import Editor from "@monaco-editor/react"
import Split from "react-split"
import { PlayIcon, ChevronRightIcon, ShareIcon } from "lucide-react"
import FileExplorer from "./components/FileExplorer"
import TabBar from "./components/TabBar"
import Console from "./components/Console"
import WebView from "./components/WebView"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  const [openFiles, setOpenFiles] = useState(["App.jsx", "index.jsx"])
  const [activeFile, setActiveFile] = useState("App.jsx")
  const [code, setCode] = useState(`import React from 'react';

export function App() {
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')`)

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="toolbar">
          <div className="left-tools">
            <button className="tool-button">
              <PlayIcon size={16} />
              React Playground
              <ChevronRightIcon size={16} />
            </button>
          </div>
          <div className="right-tools">
            <button className="tool-button">
              <ShareIcon size={16} />
              Share
            </button>
          </div>
        </div>
        <Split className="split-horizontal" sizes={[20, 80]} minSize={100} gutterSize={8} direction="horizontal">
          <FileExplorer />
          <div className="editor-container">
            <TabBar files={openFiles} activeFile={activeFile} onTabClick={setActiveFile} />
            <Split className="split-vertical" sizes={[70, 30]} direction="vertical" gutterSize={8}>
              <Editor
                height="100%"
                defaultLanguage="javascript"
                value={code}
                onChange={setCode}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollbar: {
                    vertical: "visible",
                    horizontal: "visible",
                  },
                  lineNumbers: "on",
                  roundedSelection: false,
                  padding: { top: 10 },
                }}
              />
              <Split className="split-horizontal" sizes={[50, 50]} direction="horizontal" gutterSize={8}>
                <Console />
                <WebView code={code} />
              </Split>
            </Split>
          </div>
        </Split>
      </div>
    </div>
  )
}

export default App

