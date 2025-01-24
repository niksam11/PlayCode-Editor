import React, { useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function WebView({ code }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            ${code}
            ReactDOM.render(<App />, document.getElementById('root'));
          </script>
        </body>
      </html>
    `

    if (iframeRef.current) {
      iframeRef.current.srcdoc = html
    }
  }, [code])

  return (
    <div className="web-view">
      <div className="web-view-header">
        <span>Web View</span>
        <button className="close-button">
          <X size={14} />
        </button>
      </div>
      <iframe ref={iframeRef} title="preview" sandbox="allow-scripts" className="web-view-content" />
    </div>
  )
}

