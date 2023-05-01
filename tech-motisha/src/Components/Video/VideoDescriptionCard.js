


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../commons/Comments";


const VideoDescriptionCard = ({ comment, users, setComment }) => {
  const [singleVideo, setSingleVideo] = useState({});
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0); // added state for likes count
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
        setLikesCount(data.likes_count); // set the initial likes count
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
        console.log(data);
        setComment((previousComment) => [data, ...previousComment]);
      });
    e.target.reset();
  }

  function handleLike() {
    setLiked(!liked);
  fetch(`/api/videos/${id}/likes`, {
    method: liked ? "DELETE" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ like: { user_id: userId, content_id: id } }), // send only the user_id and content_id
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setLikesCount(data.likes_count); // update the likes count after the like has been created or destroyed
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
          {liked ? "Unlike" : "Like"}
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
