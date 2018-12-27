import React from 'react'

const AceEditor = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('brace/mode/markdown');
    require('brace/theme/github');

    return <Ace {...props} width="100%" />
  }

  return null;
}

class Editor extends React.Component {
  state = {mounted: false};

  componentDidMount() {
    this.setState({mounted: true});
  }

  render = () => (this.state.mounted ? <AceEditor {...this.props} /> : null);
}

export default Editor