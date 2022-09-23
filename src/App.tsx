import { ReactElement, useState } from 'react'
import  ReactDOM  from 'react-dom'
import { ButtonScroll, Overlay } from './components/common'
import { RouterMain } from './router'

function App() {
  return (
    <div className="App">
      <RouterMain></RouterMain>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay') as HTMLElement)}
      {ReactDOM.createPortal(<ButtonScroll/>,document.getElementById('button-scroll') as HTMLElement)}
    </div>
  )
}

export default App
