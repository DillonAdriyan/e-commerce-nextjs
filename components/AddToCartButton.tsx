"use client"

import type React from "react"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    price: number
    description: string
  }
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } })
  }

  return (
    <button onClick={handleAddToCart} className="bg-primary text-white px-6 py-2 rounded-md flex items-center">
      <ShoppingCart className="mr-2" />
      Add to Cart
    </button>
  )
}

export default AddToCartButton

