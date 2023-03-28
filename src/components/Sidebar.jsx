import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  const { isOpen, handleClose } = useContext(SidebarContext);


  return (
    <div className={`${ isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 shadow-2xl px-4 lg:px-[35px] z-20 `}>
      <div className='flex justify-between items-center py-3 border-b'>
        <div className=' uppercase text-sm font-semibold'>
          Shopping bag ({itemAmount})
        </div>
        <div onClick={() => handleClose()} className=' cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className=' text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col overflow-x-hidden overflow-y-auto h-2/3 '>
        {cart.map((item)=>{
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className=' flex flex-col gap-y-3 py-0 mt-2'>
        <div className=' flex justify-between items-center w-full'>
          <div className=' uppercase font-semibold text-md'><span className=' mr-2'>Total:</span>$ {total}</div>
          <div onClick={clearCart} className=' cursor-pointer bg-red-500 w-10 h-10 flex justify-center items-center text-white text-xl py-4'>
            <FiTrash2 />
          </div>
        </div>
        <Link className=' bg-gray-200 p-2  w-full text-primary font-medium flex justify-center items-center' to="/">View cart</Link>
        <Link className=' bg-primary p-2  w-full text-gray-200 font-medium flex justify-center items-center' to="/">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
