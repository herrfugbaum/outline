import React from 'react'
import MDX from './MDX'

// import custom components
import { ResponsiveCalendar } from '@nivo/calendar'

// import mast plugins
import slugHeadings from 'remark-slug'
import autoLinkHeadings from 'remark-autolink-headings'

// import hast plugins
import rehypePrism from '@mapbox/rehype-prism'
import rehypeSanitize from 'rehype-sanitize'

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

  render() {
    const sanitizerConfig = {
      tagNames: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'h7',
        'h8',
        'ul',
        'ol',
        'li',
        'br',
        'b',
        'i',
        'strong',
        'em',
        'a',
        'pre',
        'code',
        'img',
        'demo',
        'Demo',
      ],
    }
    return (
      <MDX
        key="preview"
        scope={scope}
        mdPlugins={[slugHeadings, autoLinkHeadings]}
        hastPlugins={[rehypePrism, [rehypeSanitize, sanitizerConfig]]}
      >
        {this.props.content}
      </MDX>
    )
  }
}
export default Preview
