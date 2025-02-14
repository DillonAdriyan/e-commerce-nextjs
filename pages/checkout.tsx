"use client"

import type React from "react"
import { useState } from "react"
import Head from "next/head"

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement checkout logic here
    console.log("Checkout data:", formData)
  }

  return (
    <>
      <Head>
        <title>Checkout - EcoShop</title>
        <meta name="description" content="Complete your eco-friendly purchase" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="zipCode" className="block mb-1">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md w-full">
            Place Order
          </button>
        </form>
      </div>
    </>
  )
}

export default CheckoutPage

