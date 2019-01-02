const EditorMeta = ({ wordCount, characterCount }) => (
  <div
    style={{
      display: 'flex',
      textTransform: 'uppercase',
      color: 'darkgray',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '10px',
      fontSize: '0.8em',
    }}
  >
    <div>
      <label>Filename:</label>
      <br />
      <input
        type="text"
        defaultValue="MyDocument.mdx"
        style={{
          borderTop: 'none',
          borderRight: 'none',
          borderLeft: 'none',
          borderBottom: '3px solid darkgray',
        }}
      />
    </div>
    <div>
      <div>
        Words: <span>{wordCount}</span>
      </div>
      <div>
        Characters: <span>{characterCount}</span>
      </div>
    </div>
  </div>
)

export default EditorMeta
