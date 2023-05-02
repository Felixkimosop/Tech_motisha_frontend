import "./UserPosts.css";
import React, { useState, useEffect } from "react";
import UserBar from "./UserBar";
import { Link } from "react-router-dom";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
       console.log(response.contents)
        setPosts(response.contents);
      });
  }, [token]);
  console.log(posts)

 const mypost =  Array.isArray(posts) ? (
    posts.map((post, index) => (

      <div key={index} style={{marginLeft:"350px"}}>
      {  console.log(post.title)}
        <h2>{post.title}</h2>
        <p>{post.content_type}</p>
        <img src={post.thumbnail} alt="" />

        <video src={post.url} controls></video>
        <p>{post.description}</p>
        <p>
          <span>Created on</span> {post.created_at}
        </p>
      </div>
    ))
  ) : null


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        kind,
        thumbnail,
        url,
        description,
        category_id: 1, // Replace with the actual category ID
        user_id: 2, // Replace with the actual user ID
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.success) {
          setPosts([...posts, response.content]);
          setTitle("");
          setKind("");
          setThumbnail("");
          setUrl("");
          setDescription("");
          setShowForm(false);
        }
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <div>
      <h2 className='text-center'>My Posts</h2>
      <Link to='/new-video' style={{'margin-left':'50%'}} >New Post</Link>
      {/* {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content-type">Content Type</label>
          <input
            type="text"
            id="content-type"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          />
          <label htmlFor="thumbnail">Thumbnail URL</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      )} */}
     {mypost}
    </div>
    < UserBar />
    </>
  );
}

export default UserPosts;
