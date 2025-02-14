"use client"

import type React from "react"
import { useCart } from "@/context/CartContext"
import type { CartItem } from "@/types/cart"

interface CartItemQuantityProps {
  item: CartItem
}

const CartItemQuantity: React.FC<CartItemQuantityProps> = ({ item }) => {
  const { dispatch } = useCart()

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(e.target.value)
    if (newQuantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: newQuantity } })
    }
  }

  return (
    <input
      type="number"
      min="1"
      value={item.quantity}
      onChange={handleQuantityChange}
      className="border rounded-md px-2 py-1 w-16 mr-4"
    />
  )
}

export default CartItemQuantity

