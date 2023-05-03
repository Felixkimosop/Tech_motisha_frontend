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


  const truncate =(string,n)=>{
    return string?.length > n ? string.substr(0,n-1) + '...': string
  }

  return (
    <div className='blogcard'>
             <div className="blog-image">
                <img src={image_url} alt="new-blog" />
            </div>

            <div className="blog-contents">
                <h4>{title}</h4>
              <p>{truncate(description,140)}</p>
              <div className='flex flex-row justify-between mt-1'>
                  <p className='text-slate-700'>Category : {category.name}</p>
                  <div className='mr-5'>
                     <FontAwesomeIcon icon={faComment} className="text-orange-500 mx-2" />{commentPerBlog.length}
                     <FontAwesomeIcon icon={faHeart} className={`text-red-500 mx-2`} />4
                  </div>
              </div>
           <Link className="read-more" to={`/blogs/${id}`}>READ MORE</Link>


        </div>
    </div>
  )
}

export default BlogCard
