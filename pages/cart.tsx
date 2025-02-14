import type React from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

const CartPage: React.FC = () => {
  // Mock cart data (replace with actual data fetching in a real application)
  const cartItems = [
    { id: 1, name: "Eco Product 1", price: 29.99, quantity: 2 },
    { id: 2, name: "Eco Product 2", price: 39.99, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <>
      <Head>
        <title>Your Cart - EcoShop</title>
        <meta name="description" content="Review and checkout your eco-friendly products" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link href="/" className="text-primary hover:underline">
              Continue shopping
            </Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={() => {
                        /* Implement quantity change */
                      }}
                      className="border rounded-md px-2 py-1 w-16 mr-4"
                    />
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="bg-primary text-white px-6 py-2 rounded-md block text-center mt-6">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartPage

