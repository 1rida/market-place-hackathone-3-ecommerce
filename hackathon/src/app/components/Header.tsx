import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {

  interface Product {
    id: number;
    name: string;
    // Add other product properties if needed
  }

  const [, setProducts] = useState<Product[]>([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://template6-six.vercel.app/api/products');
      const data = await response.json();
      setProducts(data); // Assuming the API returns a list of products
    };

    fetchProducts();
  }, []);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Container for logo, nav, and cart on large screens */}
        <div className="flex items-center justify-between space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h1>Funiro</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/shop">
              <li className="hover:text-gray-400">Shop</li>
            </Link>
            <Link href="/product">
              <li className="hover:text-gray-400">Product</li>
            </Link>
            
            <Link href="/blog">
              <li className="hover:text-gray-400">Blog</li>
            </Link>
            <Link href="/checkout">
              <li className="hover:text-gray-400">check out</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-gray-400">Contact</li>
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="relative">
            {/* Cart icon can go here */}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <nav className="md:hidden mt-4 space-y-4">
          <Link href="/shop">
            <li className="block hover:text-gray-400">Shop</li>
          </Link>
          <Link href="/product">
            <li className="block hover:text-gray-400">Product</li>
          </Link>
          <Link href="/blog">
            <li className="block hover:text-gray-400">Blog</li>
          </Link>
          <Link href="/checkout">
              <li className="hover:text-gray-400">check out</li>
            </Link>
          <Link href="/contact">
            <li className="block hover:text-gray-400">Contact</li>
          </Link>
        </nav>
      </div>
    </header>
  );
}
