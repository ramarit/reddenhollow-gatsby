import React from "react"

import background_video from "../videos/reddenhollow.mp4"

const Video = ({ ...props }) => (
  <div className="video">
        <div dangerouslySetInnerHTML={{ __html: `
        <video
          preload
          loop
          muted
          autoplay
          playsinline
          poster="/video_cover.jpeg"
          src="/reddenhollow.mp4"
          type="video/mp4"
        />,
      ` }}></div>
      </div>
)
export default Video