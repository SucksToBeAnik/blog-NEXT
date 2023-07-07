import React from 'react'
import productive from "../../public/images/productive.jpg"
import Image from 'next/image';

function RootPage() {
  return (
    <main className="container grid grid-cols-5 my-8">
      <div className="col-span-5 lg:col-span-2 flex flex-col items-center  font-bold px-8 py-4">
        <h1 className='text-6xl bg-gradient-to-b from-purple-800 to-purple-400 bg-clip-text text-transparent text-left p-4'>Write Simple Blogs</h1>
        <p className="text-5xl text-left p-4 font-thin">Publish Now! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, maiores?</p>
      </div>
      <div className="relative col-span-5 lg:col-span-3 h-96 lg:h-auto">
        <Image src={productive} fill={true} alt={'Home pic'} className='bg-cover lg:max-w-2xl max-w-xl p-4 shadow-md rounded-md'></Image>
      </div>
    </main>
  )
}

export default RootPage;