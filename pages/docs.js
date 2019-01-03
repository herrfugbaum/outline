import React from 'react'
import LiveEditor from '../components/LiveEditor'

const Docs = () => (
  <React.Fragment>
    <div style={{ height: '20vh' }}>
      <LiveEditor />
    </div>
    <div style={{ height: '20vh', marginTop: '150px' }}>
      <LiveEditor />
    </div>
    <div style={{ height: '20vh', marginTop: '150px' }}>
      <LiveEditor />
    </div>
  </React.Fragment>
)

export default Docs
