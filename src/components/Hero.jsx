import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className=' bg-hero h-[800px] bg-cover bg-no-repeat bg-center py-24'>
    <div className=' container mx-auto flex justify-around h-full'>
      <div className=' flex flex-col justify-center'>
        <div className=' font-semibold flex items-center uppercase'>
          <div className=' w-10 bg-red-500 h-[2px] mr-3'></div>
          new trend
        </div>
        <h1 className=' uppercase text-7xl leading[1.1] '>
          atumn sale stylish <br/>
          <span className=' font-semibold'>womens</span>
        </h1>
        <Link className='uppercase font-semibold border-b-2 border-primary self-start ' to={"/"}>
          Discover more
        </Link>
      </div>

      <div className=' hidden lg:block'>
        <img src={WomanImg} alt="" />
      </div>
    </div>
  </section>;
};

export default Hero;
