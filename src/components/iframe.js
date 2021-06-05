import React from "react"
const Iframe = ({ iframeSrcURL, ...props }) => (
  <div className="video">
    <iframe
      src={iframeSrcURL}
      seamless
    />
  </div>
)
export default Iframe
