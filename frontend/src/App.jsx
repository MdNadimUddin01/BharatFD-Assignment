import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from './component/Editor'
import Textfield from './component/TextField'
import AddFaq from './pages/AddFaq'
function App() {
  return (
    <>
    {/* <Editor></Editor> */}
    <AddFaq></AddFaq>
    </>
  )
}

export default App
