import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    <main
     
      className={` flex min-h-screen 
      h-72 bg-gradient-to-l from-purple-600/[0.5] to-white-600"
        flex-col items-center
       p-24 ${inter.className}`}

    >
      <h1 className="text-lg">Home Page</h1>
      <Link className="text-lg hover:text-white"  href="/posts" >All posts</Link>
    </main>
  );
}