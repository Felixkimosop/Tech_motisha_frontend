import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogDescription = () => {
    const [singleBlog, setSingleBlog] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/uploads/${id}`)
          .then(res => res.json())
          .then(data => {
            setSingleBlog(data)
          })
      }, [])

      const { title, description, image_url, upload_url } = singleBlog


  return (
    <div>
            <img src={image_url} alt={title} />
        <h4>{title}</h4>


        <p>category</p>
        <p>date</p>
        <p>{description}</p>
        <Link to={`/blogss`}>back</Link>
    </div>
  )
}


export default BlogDescription
