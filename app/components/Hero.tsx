
"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
  const scrollOnClick = () => {
  }
  return (
   
    <div className='Hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className="hero__title">Find the Cars....</h1>
           <p className="hero__subtitle">You can see latest Cars and their features</p>
           <CustomButton 
           title="Explore"
           containerStyles="bg-black text-white rounded-full mt-10 font-extrabold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer"
           handleClick={scrollOnClick}/>
        </div>
       <div className="hero__image-container">
        <div className="hero__image -right-40 -top-60">
          <Image src={'/mercedes.png'} alt='hero' 
          fill className='object-contain'
          />
          </div>
         
       </div>
      
     
    </div>

  )
}

export default Hero