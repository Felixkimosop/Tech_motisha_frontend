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

      <Link  className='bg-bunting text-white p-3 mb-3' to='/new-video' style={{'margin-left':'50%'}} >New Post</Link>

     </div>
     <div className="flex flex-col justify-between">
     {mypost}
     </div>
    < UserBar />
    </>
  );
}

export default UserPosts;
