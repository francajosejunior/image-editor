import React, { Component, createRef } from 'react'

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

    if (!imageList[this.props.src]) {
      this.addSrc(this.props.src)
    }
  }

  handleImageLoaded = src => () => {
    const { imageList } = this.state

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
    const Loader = this.props.loaderComponent

    //if (loading) {
    return <Loader />
    //}
    return <></>
  }
}

export default Img
