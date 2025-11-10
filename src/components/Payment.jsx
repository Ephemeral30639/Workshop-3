import { useState } from 'react'

function Payment({ onBack }) {
  const [formData, setFormData] = useState({
    nameOnCard: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cvv: '123',
    month: 'MM',
    year: 'YYYY',
    comments: '',
    sameAsShipping: true
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Payment submitted:', { ...formData })
  }

  const handleCancel = () => {
    console.log('Payment cancelled')
    // If you want to reset the form, uncomment the following:
    // setFormData({
    //   nameOnCard: '',
    //   cardNumber: '',
    //   cvv: '',
    //   month: 'MM',
    //   year: 'YYYY',
    //   comments: '',
    //   sameAsShipping: false
    // })
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Back Button */}
      <div className="p-6">
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Try Our Payment Form</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our beautifully designed payment form with real-time validation, secure
            input handling, and smooth animations.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
              <p className="text-gray-400 text-sm">All transactions are secure and encrypted</p>
            </div>

            {/* Name on Card */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>

            {/* Card Number and CVV */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs mb-6">Enter your 16-digit number.</p>

            {/* Month and Year */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Month</label>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none appearance-none transition-colors duration-200"
                >
                  <option value="MM">MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none appearance-none transition-colors duration-200"
                >
                  <option value="YYYY">YYYY</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>

            {/* Billing Address */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Billing Address</h3>
              <p className="text-gray-400 text-sm mb-4">The billing address associated with your payment method</p>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="sameAsShipping"
                  checked={formData.sameAsShipping}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-emerald-600 bg-gray-700 border-gray-600 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <label className="ml-2 text-sm">Same as shipping address</label>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none transition-colors duration-200"
                placeholder="Add any additional comments"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-4">
              🔒 This is a secure form with real-time payment validation component
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-500">
              <span>• Secure Encrypted</span>
              <span>• Real-time Validation</span>
              <span>• Responsive Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment