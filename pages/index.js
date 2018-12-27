import Preview from '../components/Preview'
import Editor from '../components/Editor'
import ErrorBoundary from '../components/ErrorBoundary'

const wrapperStyles = {
  display: 'flex',
  height: '100%'
}

const editorStyles = {
  height: '100%',
  width: '50%',
  borderRight: '1px solid darkgray'
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
  fontSize: '0.8em'
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      wordCount: 0,
      characterCount: 0
    }
    this.onEditorInput = this.onEditorInput.bind(this)
    this.countWords = this.countWords.bind(this)
    this.countCharacters = this.countCharacters.bind(this)
  }
  countWords(code) {
    const wc = code.split(' ').length
    this.setState({wordCount: wc})
  }
  countCharacters(code) {
    const cc = code.split('').length
    this.setState({characterCount: cc})
  }
  onEditorInput(value) {
    this.countWords(value)
    this.countCharacters(value)
    this.setState({
      code: value
    })
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div style={{height: '100vh'}}>
        <div
          style={{
            display: 'flex',
            textTransform: 'uppercase',
            color: 'darkgray',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '10px',
            fontSize: '0.8em'
          }}
        >
          <div>
            <label>Filename:</label><br />
            <input
              type="text"
              value="MyDocument.mdx"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '3px solid darkgray'
              }}
            />
          </div>
          <div>
            <div>Words: <span>{this.state.wordCount}</span></div>
            <div>Characters: <span>{this.state.characterCount}</span></div>
          </div>
        </div>
        <div style={wrapperStyles}>
          <div style={editorStyles}>
            <div style={editorHeaderStyles}>Editor <button>Fullscreen</button></div>
            <Editor
              mode="markdown"
              theme="github"
              onChange={this.onEditorInput}
              value={this.state.code}
              style={{height: '100%'}}
              fontSize={16}
              tabSize={2}
              focus
            />
          </div>
          <div style={previewStyles}>
            <div style={editorHeaderStyles}>Preview <button>Show Code</button></div>
            <ErrorBoundary>
              <Preview style={{height: '100%'}} content={this.state.code} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    )
  }
}

export default Index