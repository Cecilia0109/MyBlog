import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>Cecilia's Daily Blog</h1>
        <h2 className='mt-5 md:mt-0'>Welcome to My Coding World</h2>
        {/* <span className='underline decoration-4 decoration-[#F7AB0A]'>My Blogs</span> {" "}
        favorite blog */}
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, commodi.</p>
    </div>
  )
}

export default Banner
