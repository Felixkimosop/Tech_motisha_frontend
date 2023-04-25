import React from 'react'

const Comments = ({comment,users}) => {

  const {user_id, content_id, body} = comment

 const singleUser = users.find((user)=>{
  return user.id === user_id
 })

   console.log(singleUser);





  return (
    <div>
      <p className='username'>@:~  {singleUser.name}</p>

      <p className='comment'>{body}</p>
      <hr/>

    </div>
  )
}

export default Comments
