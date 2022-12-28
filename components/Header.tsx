import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href="/">
            <Image 
                src="https://links.papareact.com/1m8"
                width={50}
                className="rounded-full"
                height={50}
                alt="logo"
            />
        </Link>
        <h1>Cecilia's Blog</h1>
      </div>
      <div>
        <Link href="google.com" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center'
        >
        Enjoy the fun of coding
        </Link>
      </div>
    </header>
  )
}

export default Header
