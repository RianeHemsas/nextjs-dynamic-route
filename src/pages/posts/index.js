import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
  
    return{
      props: 
        {posts:data}
      
    }
  }

    // const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

    const Posts = ({ posts }) => {
        return (
            <div className="flex flex-col min-h-screen  h-100 bg-gradient-to-l from-purple-600/[0.5] to-white-600 justify-center  p-10">

            <h1 className="text-lg text-black "  >All Posts</h1>
            <ul>
              {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                <li className=" text-black border-purple-600 border-2 rounded-lg p-5 m-5 mx-0  duration-75 hover:shadow-lg shadow-white">
                  Title :  {post.title}
                </li>
              </Link>
              ))}
            </ul>
          </div>
        )
    }

    
    export default Posts;