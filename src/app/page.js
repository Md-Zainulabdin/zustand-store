import React from 'react'
import Products from './components/products/page'

const Home = () => {
  return (
    <div className='w-full px-[20px] md:px-[50px]'>
      <div className="title py-8">
        <h1 className='text-3xl font-semibold text-[#222]'>All Products :</h1>
      </div>
      <Products/>
    </div>
  )
}

export default Home