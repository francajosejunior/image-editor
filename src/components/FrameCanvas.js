import React from 'react'
import './../scss/frame-canvas.scss'
import Loading from './Loading'
import Img from './Img'

const FrameCanvas = ({ url }) => {
  return (
    <div className="frame-canvas">
      <Img src={url} loaderComponent={Loading} />
    </div>
  )
}

export default FrameCanvas
