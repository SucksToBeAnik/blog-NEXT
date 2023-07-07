import React from "react";
import productive from "../../public/images/productive.jpg";
import Image from "next/image";

function RootPage() {
  return (
    <main className="container grid grid-cols-5 my-8">
      <div className="col-span-5 lg:col-span-2 flex flex-col justify-center font-bold px-8 py-4 space-y-2">
        <h1 className="text-6xl bg-gradient-to-b from-purple-800 to-purple-400 bg-clip-text text-transparent text-left py-4">
          Write Simple Blogs
        </h1>
        <p className="text-4xl text-left font-thin w-full py-4">
          Publish Now! 
        </p>

        <div className="text-left w-full">
          <button className="btn inline-block bg-purple-500 text-zinc-200 font-normal uppercase hover:bg-white hover:text-purple-500 transition-all ease-in">Write a Blog</button>
        </div>
      </div>

      <div className="relative col-span-5 lg:col-span-3 w-full">
        <Image
          src={productive}
          alt={"Home pic"}
          className="bg-cover p-4 shadow-md rounded-md w-4/5 h-auto mx-auto"
        ></Image>
      </div>
    </main>
  );
}

export default RootPage;
