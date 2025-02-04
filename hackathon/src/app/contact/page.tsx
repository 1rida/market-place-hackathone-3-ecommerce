"use client";

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Your message has been sent successfully!');
    }, 2000);
  };

  return (
    <div
      className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg"
      style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCf8fmIO0m-vs2dJxbU0bldE2qOu7FAKQvwA&s)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <Header />

      {/* Contact Form */}
      <div
        className="p-6 rounded-lg bg-opacity-20"
        style={{
          background: 'rgba(255, 255, 255, 0.2)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 className="text-4xl font-bold text-center text-brown-700 mb-6">Contact Us</h1>

        <p className="text-center text-black mb-6">Have questions or need assistance? Get in touch with us!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-brown-700 transition duration-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}

        {/* Contact Information */}
        <div className="text-center mt-6">
          <p className="text-xl text-gray-800 flex justify-center items-center space-x-2">
            <FaEnvelope color="black" size="1.5rem" />
            <a href="mailto:ridarasheed58@gmail.com" className="text-black hover:text-blue-800">
              ridarasheed58@gmail.com
            </a>
          </p>
          <p className="text-xl text-black flex justify-center items-center space-x-2">
            <FaWhatsapp color="green" size="1.5rem" />
            <a href="https://wa.me/923131313131" className="text-black hover:text-green-800">
              0313131313
            </a>
          </p>
          <button className="px-4 py-2 text-white font-semibold rounded-md border-2 border-black hover:border-gray-700 transition-all duration-300">
            Click Here for Chat 👆
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
