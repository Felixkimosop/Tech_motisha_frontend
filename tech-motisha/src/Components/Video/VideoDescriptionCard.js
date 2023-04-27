

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../commons/Comments";


const VideoDescriptionCard = ({ comment, users,setComment}) => {
  const [singleVideo, setSingleVideo] = useState({});

  const [liked, setLiked] = useState(false); // added state for "liked" status
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("jwt");





  useEffect(() => {
    fetch(`/uploads/${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        setSingleVideo(data);
      });
  }, []);
  console.log(singleVideo);

  const { title, description, image_url, upload_url } = singleVideo;

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
        setComment((previousComment)=> [data,...previousComment])
      })
      e.target.reset()
  }
console.log(comment)



  function handleLike() {
    // Toggle the "liked" state when the like button is clicked
    setLiked(!liked);

    // Send a POST request to the API to create or destroy the "like" association
    fetch(`/api/videos/${id}/likes`, {
      method: liked ? 'DELETE' : 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ like: !liked }) // pass an empty object in the request body
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }



  const filteredComments = comment.filter((comment) => {
    return comment.content_id === parseInt(id)
  });


   // console.log(filteredComments);


  const allComments =  filteredComments.map((comm, index)=>{
      return <Comments users={users} key={index} comment = {comm} />
    })

  return (
    <div className="video-description">
      <button className="btn btn-link">
        <Link to={"/videos"}>Back</Link>
      </button>
      <video
        src={upload_url}
        type="video/mp4"
        controls
        className="videoplayer"
        poster={image_url}
      ></video>

    <div className="likes">

      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'} {/* Toggle the text of the button based on the "liked" state */}
      </button>
      </div>

      <form onSubmit={handleComment}>

        <input type='text' name='body' placeholder="comment"/>

        <button type='submit'>comment</button>
      </form>

<div className='video-comments'>
{allComments}
</div>
    </div>
  );
};

export default VideoDescriptionCard;

