"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'credit_card', // default payment method
  });
  const [cartItems] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2'  },
    // You can dynamically add products here
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


  // interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, address, phone, paymentMethod } = formData;

    if (!name || !address || !phone || !paymentMethod) {
      setError('Please fill out all fields.');
      return;
    }

    // Simulate a checkout process (e.g., sending data to a server)
    setTimeout(() => {
      console.log('Checkout successful:', formData, cartItems);
      setSubmitted(true);
    }, 1000);

    setError('');
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">Thank you for your purchase, {formData.name}!</h2>
      </div>
    );
  }

  return (
    <div
      className="p-4 max-w-sm mx-auto md:max-w-md lg:max-w-lg bg-gray-200 shadow-lg rounded-xl"
      style={{
        backgroundImage: `url('https://www.almateenhome.com/cdn/shop/files/Nek-06884_1_940x.jpg?v=1726730647')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background image covers the full height of the page
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
          backdropFilter: 'blur(10px)', // Blur for frosted glass effect
          border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
        }}
      >
        <Link href="/checkout">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-600"><i>Checkout</i></h1>
        </Link>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2 text-black underline">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-medium mb-2 text-black underline">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={3}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium mb-2 text-black underline">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-lg font-medium mb-2 text-black underline">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="w-full p-3 border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Products in Cart</h2>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg bg-gray-50 flex justify-between items-center shadow-sm"
              >
                <span className="font-semibold text-gray-800">{item.name}</span>
                
              </div>
            ))}
          </div>
        </div>

       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg focus:ring-4 focus:ring-blue-500"
          >
          Checkout
        </button>
          
      </form>
    </div>
  );
};

export default Checkout;
