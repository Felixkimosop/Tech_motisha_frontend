import React, { useState } from 'react'

function CommentForm(props) {
  const [comment, setComment] = useState('')

  const handleCommentChange = event => {
    setComment(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const token = localStorage.getItem('token')

    fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comment: {
          body: comment,
          user_id: props.userId,
          content_id: props.contentId
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // Update the parent component's state to include the new comment
        props.onAddComment(data)
        // Clear the comment input field
        setComment('')
      })
      .catch(error => console.error(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          className="form-control"
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default CommentForm
