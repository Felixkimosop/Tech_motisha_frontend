import React, { useState, useEffect } from 'react'
import StaffBar from './StaffBar'
import styles from '../commons/style'
import { AiFillLike, AiOutlineDislike,AiOutlineComment,AiFillFlag} from "react-icons/ai"


function StaffPost() {
  const [data, setData] = useState()
  const token = localStorage.getItem('token')
  const [is_approved, setIsApproved] = useState(false)

  useEffect(() => {
    fetch('/contents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  const approvePost = (id) => {
    fetch(`/contents/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: { is_approved: true }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // Update the state to reflect the change in is_approved attribute
        setData(prevData => prevData.map(content => {
          if (content.id === id) {
            // Update the content with the new is_approved value
            const updatedContent = { ...content, is_approved: true }
            // Set the state to the updated content array
            return updatedContent
          }
          return content
        }))
      })
  }
  
  const handleComment = (userId, contentId) => {
    // Render an input field for the user to enter a comment
    console.log(`User ${userId} is commenting on content ${contentId}`)
    
  }
  const icons = [
    {
        title: "like",
        icon: < AiFillLike />
    },
    {
        title: "dislike",
        icon: < AiOutlineDislike />
    },   {
        title: "comment",
        icon: < AiOutlineComment />
    },
    {
        title: "flag",
        icon: < AiFillFlag />
    }
  ]

  const buttons = icons.map((icon,index)=>{
    return(
        <div className='flex flex-column p-5 ' key={index}>
            <div>{icon.icon}</div>
            <button>{icon.title}</button>
            

        </div>
    )
  })
  
  const posts = Array.isArray(data) ? data.map((post, index) => {
    return (
        
      <div key={index} className="flex flex-col justify-center items-left text-white w-full sm:w-1/2 p-6">
        <img src={post.thumbnail} />
        <h3 className='text-orange-700 font-semibold px-4 mb-4 mt-4 ss:text-[22px] text-[12px] font-poppins'>{post.title}</h3>
        <p className={`${styles.paragraph} px-4 mb-2 text-primary`}>{post.description}</p>
        <p className={`${styles.paragraph} px-5 text-primary`  }>{formatDate(post.created_at)}</p>
        <div className='flex px-10  text-primary'>
        {post.is_approved ? (
          <p className='text-green-700'>Approved</p>
        ) : (
          <button type="button" className='btn p text-orange-700' onClick={() => approvePost(post.id)}>Approve</button>
        )}
        {/* <div>
            
        <button type="button" className='btn p-5'> {} Like</button>
        </div>
       
        <button type="button" className='btn p-5'>Dislike</button>
        <button type="button" className='btn p-5' onClick={() => handleComment(post.user_id, post.id)}>Comment</button>
        <button type="button" className='btn p-5'>Flag</button> */}
        {buttons}
        </div>
      </div>
    )
  }) : null

  return (
    <>
    <div className="flex flex-wrap " style={{marginLeft:"350px"}}>
      <h1 className="w-full text-center text-3xl font-bold py-8">All Posts</h1>
      {posts}
    </div>
    < StaffBar />
    </>
  )
}

export default StaffPost
