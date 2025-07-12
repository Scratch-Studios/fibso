import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import { GiShoppingBag } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-20  mx-auto p-4 container flex items-center justify-between bg-blue-50 rounded shadow-md'>
      <div className='flex items-center justify-between w-full'>
        {/* logo */}
        <div className='h-full w-full p-4'>
          <img src='https://picsum.photos/id/1045/100/100' alt='logo' className='w-20 h-10'/>
        </div>

        {/* nav */}
        <nav className='flex justify-end items-center gap-6'>
          <div className='flex items-center justify-between gap-2 text-blue-400'>
            <FaHome size={20}/>
            <Link to={"/"} className='font-semibold'>Home</Link>
          </div>
          <div className='flex items-center justify-between gap-2 text-blue-400'>
            <GiShoppingBag size={20}/>
            <Link to={"/product"} className='font-semibold'>Product</Link>
          </div>
          <div className='flex items-center justify-between gap-2 text-blue-400'>
            <FaPhoneAlt size={20}/>
            <Link to={"/contact"} className='font-semibold'>Contact</Link>
          </div>
           <div className='flex items-center justify-between gap-2 text-blue-400 '>
            <div className='relative'>
              <FaShoppingCart size={20}/>
            <p className='absolute -top-4 bg-white rounded-full -right-3 px-1 '>0</p>
            </div>
            <Link to={"/cart"} className='font-semibold'>Cart</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header