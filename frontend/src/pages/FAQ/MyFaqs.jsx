import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyFaqs = () => {
    //   const [faqs, setFaqs] = useState([]);
    const faqs = [
        {
            question: "What is your return policy?",
            answer: `
        <div class="space-y-4">
          <p>We offer a comprehensive return policy:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>30-day return window for unused items</li>
            <li>Original packaging required</li>
            <li>Free returns on defective items</li>
          </ul>
          <p>To initiate a return:</p>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Log into your account</li>
            <li>Go to order history</li>
            <li>Select the item to return</li>
            <li>Print the return label</li>
          </ol>
          <div class="bg-blue-50 p-4 rounded-md mt-4">
            <p class="text-blue-800">Note: Special items may have different return policies.</p>
          </div>
        </div>
      `
        },
        {
            question: "How can I track my order?",
            answer: `
        <div class="space-y-4">
          <p>Tracking your order is simple:</p>
          <div class="bg-gray-50 p-4 rounded-md">
            <ol class="list-decimal pl-5 space-y-2">
              <li>Check your email for tracking information</li>
              <li>Click the tracking link in the email</li>
              <li>Or visit our <a href="/track-order" class="text-indigo-600 hover:text-indigo-800">order tracking page</a></li>
            </ol>
          </div>
          <p class="font-medium">Tracking updates include:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Order confirmation</li>
            <li>Shipping confirmation</li>
            <li>In-transit updates</li>
            <li>Delivery confirmation</li>
          </ul>
        </div>
      `
        },
        {
            question: "What payment methods do you accept?",
            answer: `
        <div class="space-y-4">
          <p>We accept various payment methods:</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-md">
              <h4 class="font-medium mb-2">Credit Cards</h4>
              <ul class="list-disc pl-5">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-md">
              <h4 class="font-medium mb-2">Digital Payments</h4>
              <ul class="list-disc pl-5">
                <li>PayPal</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
              </ul>
            </div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-md mt-4">
            <p class="text-yellow-800">💡 Pro tip: Save your payment method for faster checkout!</p>
          </div>
        </div>
      `
        }
    ];
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        // try {
        //   const response = await axios.get('/api/faqs/my-faqs');
        //   setFaqs(response.data);    
        //   setLoading(false);
        // } catch (err) {
        //   setError('Failed to fetch FAQs');
        //   setLoading(false);
        // }
    };

    const handleDelete = async (faqId) => {
        if (window.confirm('Are you sure you want to delete this FAQ?')) {
            try {
                await axios.delete(`/api/faqs/${faqId}`);
                setFaqs(faqs.filter(faq => faq._id !== faqId));
            } catch (err) {
                setError('Failed to delete FAQ');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <div className="text-red-600 mb-4">{error}</div>
                <button
                    onClick={fetchFaqs}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My FAQs</h1>
                <Link
                    to="/admin/add-faq"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Add New FAQ
                </Link>
            </div>

            {faqs.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No FAQs</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new FAQ.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {faqs.map((faq) => (
                        <div 
                            key={faq._id} 
                            className="bg-white shadow rounded-lg overflow-hidden h-[300px] flex flex-col"
                        >
                            {/* FAQ Header with Question */}
                            <div className="px-6 py-4 bg-gray-50 border-b">
                                <h3 className="text-lg font-medium text-gray-900 truncate">
                                    {faq.question}
                                </h3>
                            </div>

                            {/* FAQ Answer */}
                            <div className="px-6 py-4 flex-1 overflow-auto">
                                <div 
                                    className="prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="px-6 py-3 bg-gray-50 border-t flex justify-end space-x-3">
                                <Link
                                    to={`/admin/edit-faq/${faq._id}`}
                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <svg
                                        className="h-4 w-4 text-gray-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(faq._id)}
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyFaqs; 