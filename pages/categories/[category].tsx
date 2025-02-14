import type React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const CategoryPage: React.FC = () => {
  const router = useRouter()
  const { category } = router.query

  // Mock product data (replace with actual data fetching in a real application)
  const products = [
    { id: 1, name: "Eco Product 1", price: 29.99 },
    { id: 2, name: "Eco Product 2", price: 39.99 },
    { id: 3, name: "Eco Product 3", price: 49.99 },
    { id: 4, name: "Eco Product 4", price: 59.99 },
    { id: 5, name: "Eco Product 5", price: 69.99 },
    { id: 6, name: "Eco Product 6", price: 79.99 },
  ]

  return (
    <>
      <Head>
        <title>{category} - EcoShop</title>
        <meta name="description" content={`Shop eco-friendly ${category} products at EcoShop`} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>

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
    </>
  )
}

export default CategoryPage

