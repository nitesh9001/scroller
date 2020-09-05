import React, { Fragment } from 'react'

import Scroller from 'scroller'
import 'scroller/dist/index.css'

const App = () => {
  var text={
    color:"white",
    borderRadius:40,
    right:30,
    shadowColor:"grey",
    onHover:"orange",
    backgroundColor:"blue"
  }
  return (
  <Fragment>
  <Scroller {...text} />
   <div style={{width:"100vw",height:'420vh'}}>fddfd</div>
  </Fragment>
  )
}

export default App
