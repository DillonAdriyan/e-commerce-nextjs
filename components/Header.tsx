"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, Search } from "lucide-react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          EcoShop
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/categories" className="text-gray-600 hover:text-primary">
            Categories
          </Link>
          <Link href="/promotions" className="text-gray-600 hover:text-primary">
            Promotions
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
          <Link href="/account" className="text-gray-600 hover:text-primary">
            Account
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Link href="/cart" className="text-gray-600 hover:text-primary">
            <ShoppingCart size={24} />
          </Link>
          <button className="md:hidden text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-primary">
              Categories
            </Link>
            <Link href="/promotions" className="text-gray-600 hover:text-primary">
              Promotions
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-primary">
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

