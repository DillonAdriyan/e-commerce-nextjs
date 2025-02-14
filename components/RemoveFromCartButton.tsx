"use client"

import type React from "react"
import { Trash2 } from "lucide-react"
import { useCart } from "@/context/CartContext"

interface RemoveFromCartButtonProps {
  itemId: number
}

const RemoveFromCartButton: React.FC<RemoveFromCartButtonProps> = ({ itemId }) => {
  const { dispatch } = useCart()

  const handleRemove = () => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId })
  }

  return (
    <button onClick={handleRemove} className="text-red-500 hover:text-red-700">
      <Trash2 size={20} />
    </button>
  )
}

export default RemoveFromCartButton

