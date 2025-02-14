import type { NextApiRequest, NextApiResponse } from "next"

// Mock product data (replace with actual database queries in a real application)
const products = [
  { id: 1, name: "Eco Product 1", price: 29.99, description: "An eco-friendly product." },
  { id: 2, name: "Eco Product 2", price: 39.99, description: "Another sustainable item." },
  { id: 3, name: "Eco Product 3", price: 49.99, description: "Green living essential." },
  { id: 4, name: "Eco Product 4", price: 59.99, description: "Environmentally conscious choice." },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

