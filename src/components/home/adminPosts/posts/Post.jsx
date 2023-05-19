import React from 'react'
import './post.scss'
import PostImage from '../../../../images/370x295.svg'
const Post = () => {
  return (
    <div className='post-wrapper'>

      <div className='post'>
         <img src={PostImage} alt="Product image" />
         <p className='postTitle'>Table lamp 1562 LTG modal</p>  
         <p>Best dress for everyone ed totam velit risus viverra<br />
          nobis donec recusandae perspiciatis incididuno</p>
          <div className='postAuthor'>
            <p>POST BY: ADMIN</p>
            <p>COMMENTS 13</p>
          </div>
      </div>

      <div className='post'>
         <img src={PostImage} alt="Product image" />
         <p className='postTitle'>Table lamp 1562 LTG modal</p>  
         <p>Best dress for everyone ed totam velit risus viverra<br />
          nobis donec recusandae perspiciatis incididuno</p>
          <div className='postAuthor'>
            <p>POST BY: ADMIN</p>
            <p>COMMENTS 13</p>
          </div>
      </div>

      <div className='post'>
         <img src={PostImage} alt="Product image" />
         <p className='postTitle'>Table lamp 1562 LTG modal</p>  
         <p>Best dress for everyone ed totam velit risus viverra<br />
          nobis donec recusandae perspiciatis incididuno</p>
          <div className='postAuthor'>
            <p>POST BY: ADMIN</p>
            <p>COMMENTS 13</p>
          </div>
      </div>

    </div>
  )
}

export default Post