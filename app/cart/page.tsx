"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import CartItemQuantity from "@/components/CartItemQuantity"
import RemoveFromCartButton from "@/components/RemoveFromCartButton"

export default function CartPage() {
  const {
    state: { items },
  } = useCart()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/" className="text-primary hover:underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {items.map((item) => (
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
                  <CartItemQuantity item={item} />
                  <RemoveFromCartButton itemId={item.id} />
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
  )
}

