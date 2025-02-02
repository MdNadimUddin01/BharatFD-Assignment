import React from 'react'
import Textfield from '../component/TextField'
import Editor from '../component/Editor'

function AddFaq() {
  return (
    <div className='container'>
      <Textfield></Textfield>
      <p>Enter FAQ answer</p>
      <Editor></Editor>
    </div>
  )
}

export default AddFaq
