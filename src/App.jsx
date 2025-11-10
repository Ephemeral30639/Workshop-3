import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* Toggle Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowPayment(!showPayment)}
          className="custom-button !bg-emerald-600 hover:!bg-emerald-700 !text-white !font-bold !py-4 !px-8 !rounded-xl !shadow-2xl !border-4 !border-emerald-400 transition-all duration-300 transform hover:scale-105 !text-lg bg-emerald-600"
          style={{ 
            backgroundColor: '#059669 !important',
            color: '#ffffff !important',
            border: '4px solid #34d399 !important'
          }}
        >
          {showPayment ? 'Show Home' : 'Show Payment Form'}
        </button>
      </div>

      {showPayment ? (
        <Payment />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react w-24 h-24" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-blue-600">Vite + React</h1>
          <p className="text-xl text-green-500 mt-4">Hello There!</p>
          <div className="card bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-md w-full text-center border-2 border-gray-200 dark:border-gray-600">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl shadow-2xl border-4 border-red-300 transition-all duration-300 text-xl mb-6 transform hover:scale-105 active:scale-95"
            >
              count is {count}
            </button>
            <p className="text-gray-600 dark:text-gray-300">
              Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs text-gray-600 dark:text-gray-400 text-center mt-8">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      )}
    </div>
  )
}

export default App
