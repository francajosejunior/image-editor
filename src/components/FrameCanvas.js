import React from 'react'
import './../scss/frame-canvas.scss'

const FrameCanvas = ({ url }) => {
  return (
    <div className="frame-canvas">
      <img src={url} />
    </div>
  )
}

export default FrameCanvas
