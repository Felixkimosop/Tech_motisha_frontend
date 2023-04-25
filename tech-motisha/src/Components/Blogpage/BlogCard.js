import React from 'react'
import {Link} from 'react-router-dom'
import './styles/BlogCard.css'


const BlogCard = ({blog}) => {

    const {id,title, description, image_url, upload_url} = blog

  return (
    <div className='blogcard'>
             <div className="blog-image">
                <img src={image_url} alt="new-blog" />
            </div>

            <div className="blog-contents">
                <h4>{title}</h4>
              <p>{description}</p>

           <Link className="read-more" to={`/blogs/${id}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default BlogCard
