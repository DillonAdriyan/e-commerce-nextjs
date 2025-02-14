"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"

const ProductPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  // Mock product data (replace with actual data fetching in a real application)
  const product = {
    id: id,
    name: `Eco Product ${id}`,
    price: 49.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    reviews: 123,
  }

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${quantity} of product ${id} to cart`)
  }

  return (
    <>
      <Head>
        <title>{product.name} - EcoShop</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                className="border rounded-md px-2 py-1 w-16"
              />
            </div>
            <button onClick={handleAddToCart} className="bg-primary text-white px-6 py-2 rounded-md flex items-center">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage

