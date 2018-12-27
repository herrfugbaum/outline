import MDX from '../components/MDX'

import {ResponsiveCalendar} from '@nivo/calendar'

const scope = {
  Demo: props => <h1>This is a demo component{console.log(props)}</h1>,
  Calendar: props => <div style={{height: '700px', minWidth: '700px'}}><ResponsiveCalendar {...props}/></div>
}

const Preview = (props) => (  
  <MDX scope={scope}>{props.content}</MDX>
)

export default Preview