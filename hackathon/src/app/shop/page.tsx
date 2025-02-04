"use client"

import React from 'react'
import ProductsList from '../components/ProductList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBarFilter from '../components/SearchBarFilter'

const page = () => {
  return (
    <div>
        <Header />
        <SearchBarFilter />
        <ProductsList />
        <Footer />

      
    </div>
  )
}

export default page
