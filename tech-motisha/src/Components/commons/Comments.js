import React from 'react'

const Comments = ({comment,users}) => {

  const {user_id, content_id, body} = comment

 const singleUser = users?.find((user)=>{
  return user.id === user_id
 })

  //console.log(singleUser);

  return (
    <div style={{'color':'#000'}}>
      <p style={{'color':'#fa510f'}}>@:  {singleUser?.name}</p>

      <p>{body}</p>

    </div>
  )
}

export default Comments
