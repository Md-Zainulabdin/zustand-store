import Link from 'next/link'
import React from 'react'
import {MdDelete} from "react-icons/md"

const Cart = () => {
  return (
    <div className="w-full px-[20px] md:px-[50px] py-6 flex flex-col gap-10">
      <div className="cart-title flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-indigo-400">
          Your Shopping Cart
        </h1>
        <p className="text-xl text-[#999]">
          You have (0) items in Cart
        </p>
      </div>

      <div className="cart-item w-full h-[350px] border flex flex-col overflow-y-auto overflow-x-hproductIdden">
       
      </div>

      <div className="cart-total-price w-full text-right flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#222]">
          Total Price :  $
        </h1>
        <div>
          <Link href={'/'} className="px-3 py-2 border-2 border-indigo-400 text-md font-medium text-indigo-400">Back to Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart