import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Comments from '../commons/Comments';
import './styles/BlogDescription.css'

const BlogDescription = ({token, comment, users, setComment}) => {
    const [singleBlog, setSingleBlog] = useState({})
    const { id } = useParams()
    const userId = localStorage.getItem("userId");
    const [likesCount, setLikesCount] = useState(0);


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);




    console.log(userId);

    function onDocumentSuccess({ numPages }) {
      setNumPages(numPages);
    }





    useEffect(() => {
        fetch(`/uploads/${id}`,token)
          .then(res => res.json())
          .then(data => {
            setSingleBlog(data)
          })
      }, [])

      const { title, description, image_url, upload_url } = singleBlog

      function handleComment(e){
        e.preventDefault();
        const newComment = {
          user_id : userId,
          content_id : id,
          body: e.target.body.value
        }

        //  console.log(newComment);
        fetch('/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify(newComment)
        })
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            setComment((previousComment)=> [data,...previousComment])
          })
          e.target.reset()
      }

      const filteredComments = comment.filter((comment) => {
        return comment.content_id === parseInt(id)
      });

      const allComments =  filteredComments.map((comm, index)=>{
        return <Comments users={users} key={index} comment = {comm} />
      })


      function handleLike() {
        const body = {
          user_id: userId,
          content_id: id
        };

        fetch(`/api/videos/${id}/likes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
           // setLikesCount(data.likes_count);
          });
      }


  return (
    <div className='blog-description'>

     <div className='blog-desc'>
     <Link to={`/blogs`}>BACK</Link>
        <h2>{title}</h2>

        <p>Date</p>
        <p>category</p>



        <p>{description}</p>
        </div>

        <div className='blog-document'>
      <Document file={upload_url} onLoadSuccess={onDocumentSuccess}className='testtt'>

      <Page pageNumber={pageNumber} />

      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>

    <button onClick={handleLike}>
          Like
        </button>
        <p>{likesCount} likes</p>

        <div className='blog-form'>
        <form onSubmit={handleComment}>
            <label>Comment</label>
            <input type='text' name='body' placeholder="comment"/>

            <button type='submit'>comment</button>
          </form>
          <div className='blog-comments'>{allComments}</div>
          </div>

    </div>
  )
}


export default BlogDescription
