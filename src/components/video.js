import React from "react"

import background_video from "../videos/reddenhollow.mp4"

const Video = ({ videoSrcURL, ...props }) => (
  <div className="video">
    <video preload autoplay muted loop><source src={require("../videos/reddenhollow.mp4")} type="video/mp4"></source></video>
  </div>
)
export default Video