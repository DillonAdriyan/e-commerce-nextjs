import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

// Fallback data in case the API is unavailable
const fallbackProducts: Product[] = [
  { id: 1, name: "Eco Product 1", price: 29.99, description: "An eco-friendly product." },
  { id: 2, name: "Eco Product 2", price: 39.99, description: "Another sustainable item." },
  { id: 3, name: "Eco Product 3", price: 49.99, description: "Green living essential." },
  { id: 4, name: "Eco Product 4", price: 59.99, description: "Environmentally conscious choice." },
]

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return fallbackProducts
  }
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Sustainable Shopping for a Better Tomorrow
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Discover our eco-friendly products and make a positive impact on the planet.
              </p>
              <Link
                href="/categories"
                className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Eco-friendly products"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Home & Living", "Fashion", "Beauty", "Food & Drink"].map((category) => (
              <Link key={category} href={`/categories/${category.toLowerCase().replace(" & ", "-")}`} className="group">
                <div className="bg-gray-100 rounded-lg p-6 text-center transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt={category}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
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
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

