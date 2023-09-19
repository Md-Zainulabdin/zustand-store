import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[70px] md:h-[90px] flex items-center justify-between px-[20px] md:px-[50px] border-b'>
        <div className="logo">
            <Link href={'/'} className='text-2xl font-semibold text-[#222]'>Zustand-Store</Link>
        </div>
        <div className="menu">
            <Link href={'/cart'} className='text-xl text-[#555]'>Cart (0)</Link>
        </div>
    </nav>
  )
}

export default Navbar