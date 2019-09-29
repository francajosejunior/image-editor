import React from 'react'

import './../scss/image-list.scss'
import MainFrame from './MainFrame'
import MainFrameContainer from '../containers/MainFrameContainer'
import PreloadImagesContainer from '../containers/PreloadImagesContainer'

const ImageList = ({ images = [], onClick, image }) => {
  return (
    <section className="image-list">
      <aside className="right">
        <ul>
          {images.map(img => {
            return (
              <li key={img.id}>
                <a href="#" onClick={() => onClick(img)}>
                  {img.title}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
      <main className="center">
        <MainFrameContainer url={image?.url} />
      </main>
    </section>
  )
}

export default ImageList
