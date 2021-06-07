import React from "react"
const Iframe = ({ iframeSrcURL, ...props }) => (
    <iframe
      src={iframeSrcURL}
      seamless
    />
)
export default Iframe