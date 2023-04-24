import React from 'react'
import {Link} from 'react-router-dom'


const BlogCard = ({blog}) => {
    const {id,title, description, image_url, upload_url} = blog
  return (
    <div className='blogcard'>
            <img src={image_url} alt="new-blog" />
        <h4>{title}</h4>


        <p>category</p>
        <p>date</p>
        <p>{description}</p>
        <Link to={`/blogss/${id}`}>readmore</Link>
    </div>
  )
}

export default BlogCard
