import Image from "next/image"
import { Star } from "lucide-react"
import type { Product } from "@/types/product"
import AddToCartButton from "@/components/AddToCartButton"

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
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
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

