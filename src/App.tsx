import { ReactElement, useState } from 'react'
import  ReactDOM  from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { ButtonScroll, Overlay } from './components/common'
import { RouterMain } from './router'

function App() {
  const toast = <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
  return (
    <div className="App">
      <RouterMain></RouterMain>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay') as HTMLElement)}
      {ReactDOM.createPortal(<ButtonScroll />, document.getElementById('button-scroll') as HTMLElement)}
      {ReactDOM.createPortal(toast,document.getElementById('toastify') as HTMLElement)}
    </div>
  )
}

export default App
