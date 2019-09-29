import React, { Component, createRef } from 'react'

const displayNone = {
  display: 'none'
}

export class Img extends Component {
  state = {
    imageList: {}
  }

  addSrc = src => {
    const obj = {
      img: this.createImagObj(src),
      loading: true
    }

    this.setState({
      imageList: {
        ...this.state.imageList,
        [src]: obj
      }
    })
  }

  createImagObj = src => {
    let i = new Image()
    i.src = src
    i.onload = this.handleImageLoaded(src)
    i.onerror = this.handleImageLoaded(src)
    return i
  }

  componentDidUpdate(prevProps, prevState) {
    const { imageList } = this.state
    if (this.props.src) {
      if (!imageList[this.props.src]) {
        this.addSrc(this.props.src)
      }
    }
  }

  handleImageLoaded = src => () => {
    const { imageList } = this.state

    // console.log(src)

    this.setState({
      imageList: {
        ...imageList,
        [src]: {
          ...imageList[src],
          loading: false
        }
      }
    })
  }

  render() {
    const { imageList } = this.state
    const { src, loaderComponent, ...rest } = this.props
    if (!imageList[src]) {
      return null
    }

    const Loader = loaderComponent
    const { loading } = imageList[src]

    return (
      <>
        {loading && <Loader />}
        {Object.keys(imageList).map(srcCurrent => {
          return (
            <img
              {...rest}
              key={srcCurrent}
              src={srcCurrent}
              style={srcCurrent !== src ? displayNone : {}}
            />
          )
        })}
      </>
    )
  }
}

export default Img
