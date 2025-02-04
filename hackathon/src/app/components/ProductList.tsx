"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
// Sanity client setup
const client = createClient({
  projectId: 'i3e6wc65',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skCWa25Ucr0mhO4hlIipCOUiajAHkQ4oX3k2owSE3vPazC36yCHmn4W01igjSkVuwt47C0J92nvgaMb64neXVcPfTxovU05bTeObA3iusr4uKiVs88GxrnS7oHKiYffOQqmdDi179vsa87Hd0mLOUbwLDZMBLWaoKvDT1vjvZ0FZpxa00dVG',
});

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
  category: string;
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]); // Track products added to the cart
  const [cartOpen, setCartOpen] = useState<boolean>(false); // Track if the cart modal is open
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false); // Track if the checkout modal is open

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product" && category != "beauty"]{
          _id,
          title,
          price,
          productImage {
            asset -> {
              _id,
              url
            }
          },
          tags,
          discountPercentage,
          isNew,
          category
        }`);

        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products. Please try again.');
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleCheckout = () => {
    setCheckoutOpen(!checkoutOpen);
  };

  const handleCheckout = () => {
    // Here you can add actual payment processing logic
    // For now, we'll just clear the cart after checkout
    alert('Checkout complete!');
    setCart([]); // Clear the cart after checkout
    setCheckoutOpen(false);
  };

  // Conditional rendering based on loading or error state
  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading furniture products...</p>;
  }

  if (error) {
    return <p className="text-center text-lg font-semibold text-red-500">{error}</p>;
  }

  return (
    <div>
     
      {/* Hero Section with Image and "Shop" Text */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-semibold">shop</h1>
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-200 gap-8 p-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-lg font-semibold">No products available.</p>
        ) : (
          
          products.map((product) => (
            <div key={product._id} className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow group">

             
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform group-hover:scale-105"
              />
             
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <p className="text-xl font-semibold text-green-600">${product.price}</p>
             

              <div className="mt-4 flex items-center justify-between">
                {product.discountPercentage > 0 && (
                  <button className="bg-red-500 text-white py-1 px-4 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">
                    {product.discountPercentage}25% OFF
                  </button>

                )}

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Tags: {product.tags?.length > 0 ? product.tags.join(', ') : 'No tags available'}
              </p>

              <p className={`text-sm mt-2 ${product.isNew ? 'text-blue-500 font-semibold' : 'text-gray-500'}`}>
                {product.isNew ? 'New Arrival!' : 'Available Now'}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-lg text-gray-500">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((product) => (
                  <div key={product._id} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Image
                        src={product.productImage.asset.url}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <p className="text-lg font-semibold">{product.title}</p>
                        <p className="text-sm text-gray-500">${product.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="text-red-500 text-sm font-semibold hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between mt-6">
              <p className="text-lg font-semibold">Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
              <button
                onClick={toggleCart}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Checkout Button */}
            {cart.length > 0 && (
              <button
                onClick={toggleCheckout}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <div>
              {cart.map((product) => (
                <div key={product._id} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src={product.productImage.asset.url}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="text-lg font-semibold">{product.title}</p>
                      <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-lg font-semibold">Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>

            
              <Link href="/checkout">
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
              Complete Checkout
            </button>
                </Link>
              
            <button
              onClick={toggleCheckout}
              className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Cart Button */}
      <button
        onClick={toggleCart}
        className="fixed bottom-10 right-10 bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
      >
        <FaShoppingCart color="white" size="1.5rem" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default ProductsList;




