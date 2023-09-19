"use client"
import useProductStore from '@/store/productStore'
import Link from 'next/link'
import React from 'react'
import {MdDelete} from "react-icons/md"

const Cart = () => {
  const allItems = useProductStore((state) => state.products);
  const removeItem = useProductStore((state) => state.removeItem);

  let price = 0;
  allItems.forEach((item) => {
    price += Number(item.Price)
  })
  return (
    <div className="w-full px-[20px] md:px-[50px] py-6 flex flex-col gap-10">
      <div className="cart-title flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-indigo-400">
          Your Shopping Cart
        </h1>
        <p className="text-xl text-[#999]">
          You have {allItems.length} items in Cart
        </p>
      </div>

      <div className="cart-item w-full h-[350px] border flex flex-col overflow-y-auto overflow-x-hproductIdden">
        {
          allItems.length === 0 ? (
            <div className='w-full h-full flex justify-center items-center'>
              <h1 className='text-2xl '>You dont have any item in cart</h1>
            </div>
          ) :
          (
            <>
            {allItems.map((prod) => (
              <div
                className="w-full px-[20px] md:px-[30px] flex items-center justify-between border-b"
                key={prod.id}
              >
                <div className="img">
                  <img src={prod.Img} alt={prod.Title} className="w-[180px]" />
                </div>
                <div className="cat text-left">
                  <h1 className="text-lg font-semibold text-[#555]">
                    {prod.Cat}
                  </h1>
                </div>

                <div className="quantity">{1}</div>

                <div className="price text-left">
                  <h2 className="text-xl font-semibold text-indigo-500">
                    {prod.Price} $
                  </h2>
                </div>

                <div className="delete-btn">
                  <button onClick={() => removeItem(prod.id)}>
                    <MdDelete size={24} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
            </>
          )
        }
      </div>

      <div className="cart-total-price w-full text-right flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#222]">
          Total Price : {price}  $
        </h1>
        <div>
          <Link href={'/'} className="px-3 py-2 border-2 border-indigo-400 text-md font-medium text-indigo-400">Back to Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart