import { useState } from 'react';
import DOMPurify from 'dompurify';
import { useAuth } from '../context/AuthContext';
import NavButtons from '../component/button/NavButtons';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {isAuthenticated} = useAuth();
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <NavButtons></NavButtons>
      <div className="max-w-3xl mx-auto my-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find detailed answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 ease-in-out"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-0"
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              <div
                className={`transition-all duration-400 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="px-6 pb-4 prose prose-indigo max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(faq.answer)
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq; 