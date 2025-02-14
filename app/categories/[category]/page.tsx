import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${category}`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const products = await getProductsByCategory(params.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category.replace("-", " ")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

