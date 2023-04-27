import React from 'react'
import {Link} from 'react-router-dom'
import './styles/BlogCard.css'
// import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
           {/* <FontAwesomeIcon icon={faComment} title='Comment' className="text-orange-500" />

           <FontAwesomeIcon icon={faHeart} title='Like' className={`text-red-500 `} /> */}
{/*
           after the like functionality
           <FontAwesomeIcon icon={faHeart} title='Like' className={`text-red-500 ${liked ? 'fill-current' : 'fill-none'}`} /> */}
        </div>
    </div>
  )
}

export default BlogCard
