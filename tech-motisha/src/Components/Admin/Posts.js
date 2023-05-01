import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import './Posts.css';



function Posts() {
  const [posts, setPosts] = useState([]);
  const [flaggedPosts, setFlaggedPosts] = useState([]);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch('/uploads',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/contents/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      });
  };

  const handleFlag = (id) => {
    const flaggedPost = posts.find((post) => post.id === id);
    const updatedFlaggedPost = { ...flaggedPost };
    updatedFlaggedPost.title = (
      <>
        {updatedFlaggedPost.title}{' '}
        <span style={{ color: 'red' }}>This post is flagged!</span>
      </>
    );
    const updatedPosts = posts.map((post) =>
      post.id === id ? updatedFlaggedPost : post
    );
    setPosts(updatedPosts);
  };

  const handleApprove = (id) => {
    const approvedPost = posts.find((post) => post.id === id);
    const updatedApprovedPost = { ...approvedPost };
    updatedApprovedPost.title = (
      <>
        {updatedApprovedPost.title}{' '}
        <span style={{ color: 'green' }}>✔</span>
      </>
    );
    const updatedPosts = posts?.map((post) =>
      post.id === id ? updatedApprovedPost : post
    );
    setPosts(updatedPosts);
  };

  const content = Array.isArray(posts)?posts.map((post, index) => {
    return (
      <div key={index}>
        <img src={post.image_url} alt="" />
        <h1>{post.title}</h1>
        <p>{post.description}</p>

     

        <button onClick={() => handleDelete(post.id)}>Remove post</button>
        <span>{post.id}</span>
        {!flaggedPosts.includes(post) && (
          <button onClick={() => handleFlag(post.id)}>Flag post</button>
        )}
        {flaggedPosts.includes(post) && <span>Flagged!</span>}
        <button onClick={() => handleApprove(post.id)}>Approve post</button>
        <hr></hr>
      </div>
    )
  }):null

  return (
    <>
    <div style={{marginLeft:"450px"}}>
      <h1> All Posts </h1>
      {content}
      </div>
      <div>
      < Sidebar />
    </div>
    </>
  );
}

export default Posts;
