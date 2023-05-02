

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../commons/Comments";
import './styles/VideoDescription.css'

const VideoDescriptionCard = ({ comment, users, setComment }) => {
  const [singleVideo, setSingleVideo] = useState({});
  const [likesCount, setLikesCount] = useState(0);
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`/uploads/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSingleVideo(data);
        setLikesCount(data.likes_count);

      });
  }, []);

  const { title, description, image_url, upload_url } = singleVideo;

  function handleComment(e) {
    e.preventDefault();
    const newComment = {
      user_id: userId,
      content_id: id,
      body: e.target.body.value,
    };

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(userId);
        setComment((previousComment) => [data, ...previousComment]);
      });
    e.target.reset();
  }

  function handleLike() {
    const body = {
      user_id: userId,
      content_id: id
    };

    fetch(`/api/videos/${id}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       // setLikesCount(data.likes_count);
      });
  }



  const filteredComments = comment.filter((comment) => {
    return comment.content_id === parseInt(id);
  });

  const allComments = filteredComments.map((comm, index) => {
    return <Comments users={users} key={index} comment={comm} />;
  });

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
          Like
        </button>
        <p>{likesCount} likes</p>
      </div>
      <form onSubmit={handleComment}>
        <input type="text" name="body" placeholder="comment" />
        <button type="submit">comment</button>
      </form>
      <div className="video-comments">{allComments}</div>
    </div>
  );
};

export default VideoDescriptionCard;



