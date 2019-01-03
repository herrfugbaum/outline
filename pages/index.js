import LiveEditor from '../components/LiveEditor'
class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <LiveEditor />
      </div>
    )
  }
}

export default Index
