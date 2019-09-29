import React, { Component } from 'react'
import ImageList from '../components/ImageList'

class ImageListContainer extends Component {
  state = {
    images: [],
    image: null
  }

  async componentDidMount() {
    const result = await fetch('http://jsonplaceholder.typicode.com/photos')
      .then(result => result.json())
      .then(result => result.slice(0, 15))

    // console.log(result.length)
    result?.forEach(({ url }) => {
      const curImg = new Image()
      curImg.src = url
      curImg.onload = function() {
        console.log(url)
      }
    })

    this.setState({
      images: result
    })
  }

  render() {
    return (
      <ImageList
        images={this.state.images}
        image={this.state.image}
        onClick={img => this.setState({ image: img })}
      />
    )
  }
}

export default ImageListContainer
