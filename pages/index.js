import PreviewBoundary from '../components/PreviewBoundary'
import Editor from '../components/Editor'
import EditorMeta from '../components/EditorMeta'

const wrapperStyles = {
  display: 'flex',
  height: '100%',
}

const editorStyles = {
  height: '100%',
  width: '50%',
  borderRight: '1px solid darkgray',
}

const previewStyles = {
  height: '100%',
  width: '50%',
}

const editorHeaderStyles = {
  padding: '10px',
  borderTop: '1px solid darkgray',
  borderBottom: '1px solid darkgray',
  textTransform: 'uppercase',
  color: 'darkgray',
  fontSize: '0.8em',
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      wordCount: 0,
      characterCount: 0,
    }
    this.onEditorInput = this.onEditorInput.bind(this)
    this.countWords = this.countWords.bind(this)
    this.countCharacters = this.countCharacters.bind(this)
  }
  countWords(code) {
    const wc = code.split(' ').filter(n => n !== '').length
    this.setState({ wordCount: wc })
  }
  countCharacters(code) {
    const cc = code.split('').length
    this.setState({ characterCount: cc })
  }
  onEditorInput(value) {
    this.countWords(value)
    this.countCharacters(value)
    this.setState({
      code: value,
    })
  }
  render() {
    const code = this.state.code
    const editorOptions = {
      fontSize: 16,
      tabSize: 2,
      mode: 'markdown',
      theme: 'github',
    }
    return (
      <div style={{ height: '100vh' }}>
        <EditorMeta
          wordCount={this.state.wordCount}
          characterCount={this.state.characterCount}
        />
        <div style={wrapperStyles}>
          <div style={editorStyles}>
            <div style={editorHeaderStyles}>
              Editor <button>Fullscreen</button>
            </div>
            <Editor
              {...editorOptions}
              onChange={this.onEditorInput}
              value={code}
              style={{ height: '100%' }}
              focus
            />
          </div>
          <div style={previewStyles}>
            <div style={editorHeaderStyles}>
              Preview <button>Show Code</button>
            </div>
            <PreviewBoundary style={{ height: '100%' }} content={code} />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
