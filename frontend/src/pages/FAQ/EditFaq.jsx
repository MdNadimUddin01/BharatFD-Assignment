import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Editor from '../../component/Editor';

const EditFaq = ({ }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchFaq();
  }, [id]);

  const fetchFaq = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/faqs/${id}`);
      setFormData({
        question: response.data.question,
        answer: response.data.answer
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch FAQ');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/update-faq/${id}`, formData);
      navigate('/admin/my-faqs');
    } catch (err) {
      setError('Failed to update FAQ');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={fetchFaq}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className='w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8'>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit FAQ</h1>
          <button
            onClick={() => navigate('/admin/my-faqs')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to FAQs
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {/* Question Input */}
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Question
              </label>
              <input
                type="text"
                id="question"
                value={formData.question}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  question: e.target.value
                }))}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your question"
                required
              />
            </div>

            {/* Answer Editor */}
            <div>
              <label
                htmlFor="answer"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Answer
              </label>
              <div className="min-h-[300px]">
                <Editor
                  answer={formData.answer}
                  setAnswer={(newAnswer) => setFormData(prev => ({
                    ...prev,
                    answer: newAnswer
                  }))}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/admin/my-faqs')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFaq; 