import { NextResponse } from "next/server"

// Mock product data (replace with actual database queries in a real application)
const products = [
  { id: 1, name: "Eco Product 1", price: 29.99, description: "An eco-friendly product." },
  { id: 2, name: "Eco Product 2", price: 39.99, description: "Another sustainable item." },
  { id: 3, name: "Eco Product 3", price: 49.99, description: "Green living essential." },
  { id: 4, name: "Eco Product 4", price: 59.99, description: "Environmentally conscious choice." },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  if (category) {
    // Filter products by category (in a real app, this would be a database query)
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(category.toLowerCase()))
    return NextResponse.json(filteredProducts)
  }

  return NextResponse.json(products)
}

