import React, { useState } from "react";
import Textfield from "../../component/TextField";
import Editor from "../../component/Editor";
import axios from "axios";

function AddFaq() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const addFAQHandler = async () => {
    setLoading(true);
    setError("");
    try {
      await axios.post(`${backendUrl}/create-faq`, { question, answer });
    } catch (error) {
      console.log(`Error : `, error.message);
      setError(error.message);
    }

    setLoading(false);
    // console.log(question, answer);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 my-auto flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-center mb-6">Question</h2>
          <Textfield question={question} setQuestion={setQuestion} />

          <div className="mt-8">
            <h2 className="text-xl font-medium text-center mb-6">
              Enter FAQ Answer
            </h2>
            <Editor answer={answer} setAnswer={setAnswer} />
          </div>
          <div className="mt-8 flex justify-center items-center">
            <button
              onClick={addFAQHandler}
              className="inline-flex items-center cursor-pointer px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Add FAQ"
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddFaq;
