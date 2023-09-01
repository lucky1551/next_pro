import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-1440px mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      <Link href='/' className='bg-mus_yellow relative -top-5 justify-center items-center hover:bg-yellow p-1 hover:cursor-pointer'>
      <Image
      src="/logo2.png"
      alt='car logo'
      width={110}
      height={32}/>
      </Link>
      <CustomButton
      title='Sign In'
      btnType ="button" 
      containerStyles="bg-black text-white rounded-full absolute -top-2 -right-4 font-extrabold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer"
      />
      </nav>
    </header>
  )
}

export default Navbar