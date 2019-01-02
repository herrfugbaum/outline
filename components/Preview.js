import React from 'react'
import MDX from './MDX'

import { ResponsiveCalendar } from '@nivo/calendar'

const scope = {
  Demo: props => <h1>This is a demo component</h1>,
  Calendar: props => (
    <div style={{ height: '700px', minWidth: '700px' }}>
      <ResponsiveCalendar {...props} />
    </div>
  ),
}

class Preview extends React.Component {
  constructor(props) {
    super(props)
  }
  /*   componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)

  } */
  render() {
    return (
      <MDX key="preview" scope={scope}>
        {this.props.content}
      </MDX>
    )
  }
}
export default Preview
