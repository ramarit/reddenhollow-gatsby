import React from "react"
const Iframe = ({ iframeSrcURL, iframeTitle, ...props }) => (
    <iframe src={iframeSrcURL} title={iframeTitle} seamless />
)
export default Iframe