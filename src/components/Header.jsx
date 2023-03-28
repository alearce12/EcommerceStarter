import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
 const {isOpen, setIsOpen } = useContext(SidebarContext);
 const { itemAmount } = useContext(CartContext);
 const [isActive, setIsActive] = useState(false);

 useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  })
 })
 

  return (
    <header className={` ${isActive? 'bg-white border-b-2 z-10 shadow-md py-2' : ' bg-transparent py-6'} fixed w-full transition-all`}>
      <div className=' container flex justify-between items-center mx-auto h-full'>
        <div>
          <Link to={"/"}>
            <div className=' w-[40px]'>
              <img src={Logo} alt="" />
            </div>
          </Link>
        </div>
        <div onClick={()=> setIsOpen(!isOpen)} className=' cursor-pointer flex relative'>
          <BsBag className=' text-2xl ' />
          <div className='bg-red-500 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center absolute -right-2 -bottom-2'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
