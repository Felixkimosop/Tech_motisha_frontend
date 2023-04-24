import React, { useState, useEffect } from 'react'

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
  
  const posts = Array.isArray(data) ? data.map((post, index) => {
    return (
      <div key={index} className="flex flex-col justify-center items-center w-full sm:w-1/3 p-6">
        <img src={post.thumbnail} />
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{formatDate(post.created_at)}</p>
        {post.is_approved ? (
          <p>Approved</p>
        ) : (
          <button type="button" className='btn' onClick={() => approvePost(post.id)}>Approve</button>
        )}
        <button type="button" className='btn'>Like</button>
        <button type="button" className='btn'>Dislike</button>
        <button type="button" className='btn' onClick={() => handleComment(post.user_id, post.id)}>Comment</button>
        <button type="button" className='btn'>Flag</button>
      </div>
    )
  }) : null

  return (
    <div className="flex flex-wrap">
      <h1 className="w-full text-center text-3xl font-bold py-8">All Posts</h1>
      {posts}
    </div>
  )
}

export default StaffPost
