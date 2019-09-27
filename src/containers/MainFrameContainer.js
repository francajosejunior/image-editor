import React, { Component } from 'react'
import MainFrame from '../components/MainFrame'
import FrameCanvas from '../components/FrameCanvas'

class MainFrameContainer extends Component {
  render() {
    return <FrameCanvas url={this.props.url} />
  }
}

export default MainFrameContainer
