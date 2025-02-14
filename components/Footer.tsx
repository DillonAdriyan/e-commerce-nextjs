import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>EcoShop is your one-stop destination for eco-friendly and sustainable products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-primary">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@ecoshop.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Green Street, Eco City, EC 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 EcoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

