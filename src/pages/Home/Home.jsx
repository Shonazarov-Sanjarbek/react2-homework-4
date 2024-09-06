import Blogs from '@/components/Blogs/Blogs'
import { useFetch } from '@/components/Hook/Hook';
import React from 'react'

function Home() {
  const { data } = useFetch("/blogs", {}, []);
  return (
    <div>
        <h2>
          <Blogs data = {data?.payload}/>
        </h2>
    </div>
  )
}

export default Home
