import Preview from './Preview'

class PreviewBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  /* componentDidUpdate (prevProps) {
    console.log(prevProps)
    if (this.state.hasError) {
      // try to render again
    }
  } */

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log('Message from ErrorBoundary', this.props)
      return <h1>Something went wrong.</h1>
    }

    return <Preview key="previewBoundary" {...this.props} />
  }
}

export default PreviewBoundary
