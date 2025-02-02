import React, { useState } from 'react'
import Textfield from '../../component/TextField'
import Editor from '../../component/Editor'

function AddFaq() {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  console.table({question, answer});

  const addFAQHandler = () => {

    console.log(question, answer);
    
  }

  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 my-auto flex justify-center items-center'>
      <div className='w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-xl font-medium text-center mb-6'>Question</h2>
          <Textfield question={question} setQuestion={setQuestion} />
          
          <div className='mt-8'>
            <h2 className='text-xl font-medium text-center mb-6'>Enter FAQ Answer</h2>
            <Editor answer={answer} setAnswer={setAnswer} />
          </div>
          <div className='mt-8 flex justify-center items-center'>
            <button onClick={addFAQHandler} className="inline-flex items-center cursor-pointer px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
              Add FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFaq
