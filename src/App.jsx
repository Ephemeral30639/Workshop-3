import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {showPayment ? (
        <Payment onBack={() => setShowPayment(false)} />
      ) : (
        <div className="min-h-screen">
          {/* Hero Section */}
          <div className="bg-emerald-500 text-white py-20">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96zM9.07 16.93L6 13.86 7.41 12.45l1.66 1.66 4.24-4.24 1.41 1.41-5.65 5.65z"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-4">PayFlow Demo</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Experience seamless payment processing with modern React components<br />
                and beautiful UI design
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Modern Payment Solutions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Secure Processing</h3>
                  <p className="text-gray-600">End-to-end encryption ensures your payment data is always protected and secure.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                  <p className="text-gray-600">Powered by Vite and React for instant load times and smooth interactions.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Mobile Ready</h3>
                  <p className="text-gray-600">Fully responsive design that works perfectly on all devices and screen sizes.</p>
                </div>
              </div>

              {/* Interactive Demo Section */}
              <div className="bg-white p-12 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setCount(count + 1)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mr-4"
                  >
                    Click Counter: {count}
                  </button>
                  <button
                    onClick={() => setShowPayment(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Try Payment Form
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Fast, safe loading, and easy to use via React and Responsive!
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form Section */}
          <div className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4">Try Our Payment Form</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto">
                Experience our beautifully designed payment form with real-time validation, secure
                input handling, and smooth animations.
              </p>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Launch Payment Form
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">PayFlow Demo</h4>
                  <p className="text-sm">A modern payment form built with React, Vite, and Tailwind CSS. Showcasing best practices for UX/UI.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Technologies</h4>
                  <ul className="text-sm space-y-2">
                    <li>• React 19</li>
                    <li>• Vite</li>
                    <li>• Tailwind CSS</li>
                    <li>• Modern JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Learn More</h4>
                  <ul className="text-sm space-y-2">
                    <li>• React Docs</li>
                    <li>• Vite Guide</li>
                    <li>• Tailwind Documentation</li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-sm">Built with ❤️ using modern web technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
