import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='container rounded-t-md md:rounded-md md:rounded-t-none p-2 text-zinc-200 md:p-8 md:mb-4 grid grid-cols-5 gap-4 bg-gradient-to-r from-purple-800 to-purple-500 fixed bottom-0 left-0 right-0 md:static z-10'>
        <div className="hidden col-span-2 md:flex items-center justify-start gap-2">
            <span className="">Logo</span>
            <span className="">Title</span>
        </div>
        <div className="col-span-1 flex items-center justify-center">
            <Link href={'#'} className='btn rounded-full text-3xl'>+</Link>
        </div>
        <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-2 md:gap-6">
            <Link href={'/'} className='nav-link'>Home</Link>
            <Link href={'/blogs'} className='nav-link'>Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar