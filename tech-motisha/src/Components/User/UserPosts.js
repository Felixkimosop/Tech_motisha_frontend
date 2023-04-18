import React,{useState,useEffect} from 'react'
import "./UserPosts.css"

function UserPosts() {
    const [posts, setposts]=useState()
    const token = localStorage.getItem("jwt");


    useEffect(()=>{
        fetch('/profile',{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(response =>{setposts(response)})

    },[token])

    console.log(posts?.contents)
   
   
  return (
    <div>

        My Posts
         {Array.isArray(posts?.contents)
        ? posts?.contents.map((post,index) => (
            <div key={index}>
              <h2>
              {post.title}
              </h2>
              <p>{post.content_type}</p>
              <img src={post.thumbnail} alt=""/>
              <video>{post.url}</video>
              <p>{post.description}</p>
              <p><span>Created on</span> {post.created_at}</p>
            </div>
          ))
        : null}
    </div>
  )
}

export default UserPosts