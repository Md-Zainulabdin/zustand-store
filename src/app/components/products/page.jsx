import React from 'react'
import ProductCard from '../ProductCard/page'
import { productList } from '@/data/productsList'

const Products = () => {
  const allProducts = productList;
  return (
    <div>
      <ProductCard products={allProducts}/>
    </div>
  )
}

export default Products