import React, { useState } from 'react'
import Textfield from '../component/TextField'
import Editor from '../component/Editor'

function AddFaq() {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  console.table({question, answer});

  return (
    <div className='min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-xl font-medium text-center mb-6'>Question</h2>
          <Textfield question={question} setQuestion={setQuestion} />
          
          <div className='mt-8'>
            <h2 className='text-xl font-medium text-center mb-6'>Enter FAQ Answer</h2>
            <Editor answer={answer} setAnswer={setAnswer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFaq
