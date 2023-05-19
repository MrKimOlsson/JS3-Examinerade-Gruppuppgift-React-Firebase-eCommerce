import React from 'react'
import './adminPost.scss'
import Button from './buttons/AdminPostBtn'
import Post from './posts/Post'

const AdminPost = () => {
  return (
    <div className='adminPost'>
      {/* <Button/> */}
      <Post/>
    </div>
  )
}

export default AdminPost