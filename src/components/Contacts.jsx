"use client"

import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    window.location.href = `mailto:nzyoka18@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.fullName}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="w-full min-h-screen bg-white py-12 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">Contact</h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 transition-colors hover:border-blue-300">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h2 className="text-gray-900 font-medium">Location</h2>
                  <p className="text-gray-600">Nyeri, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 transition-colors hover:border-blue-300">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h2 className="text-gray-900 font-medium">Email</h2>
                  <a href="mailto:nzyoka18@gmail.com" className="text-gray-600 hover:text-blue-600">
                    nzyoka18@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 transition-colors hover:border-blue-300">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h2 className="text-gray-900 font-medium">Phone</h2>
                  <a href="tel:+254796175283" className="text-gray-600 hover:text-blue-600">
                    (+254)796175283
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Out!</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}