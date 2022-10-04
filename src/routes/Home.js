import React from 'react'
import Post from '../components/Post'
import posts from '../api/Posts';

function Home() {
  return (
    <div className='container'>
      <div className='home'>
        <main className='feed'>
          {
            posts.map((item) => {
              return <Post post={item} />
            })
          }
        </main>
        <aside className='sidebar'>sidebar</aside>
      </div>
    </div>
  )
}

export default Home