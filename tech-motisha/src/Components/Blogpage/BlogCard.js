import React from 'react'
import {Link} from 'react-router-dom'
import './styles/BlogCard.css'
import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BlogCard = ({blog, comment}) => {

    const {id,title, description, image_url, upload_url, category} = blog

    console.log(comment);

    const commentPerBlog = comment.filter((comment)=>{
      return comment.content_id === id
  })


  return (
    <div className='blogcard'>
             <div className="blog-image">
                <img src={image_url} alt="new-blog" />
            </div>

            <div className="blog-contents">
                <h4>{title}</h4>
              <p>{description}</p>
              <p>Category : {category.name}</p>

           <Link className="read-more" to={`/blogs/${id}`}>READ MORE</Link>
           <FontAwesomeIcon icon={faComment} title='Comment' className="text-orange-500" />{commentPerBlog.length}

           <FontAwesomeIcon icon={faHeart} title='Like' className={`text-red-500 `} />4



        </div>
    </div>
  )
}

export default BlogCard
