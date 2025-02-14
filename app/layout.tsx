import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "EcoShop - Sustainable Shopping",
  description: "Shop eco-friendly and sustainable products at EcoShop",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

