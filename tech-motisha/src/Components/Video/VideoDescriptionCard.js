// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const VideoDescriptionCard = () => {
//   const [singleVideo, setSingleVideo] = useState({});
//   const [comment, setComment] = useState('');
//   const { id } = useParams();

//       useEffect(() => {
//         fetch(`http://localhost:3000/uploads/${id}`)
//           .then((res) => res.json())
//           .then((data) => {
//             setSingleVideo(data);
//           });
//       }, []);

//       const { title, description, image_url, upload_url } = singleVideo;


//       function handleComment(e){
//         e.preventDefault();
//         const newComment = {
//           user_id : e.target.user_id.value,
//           content_id : id,
//           body: e.target.body.value
//         }

//       //  console.log(newComment);
//       fetch('http://localhost:3000/comments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newComment)
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);

//         })
//       }

//       return (
//         <div className="video-description">
//           <button className="btn btn-link">
//             <Link to={"/videos"}>Back</Link>
//           </button>
//           <video
//             src={upload_url}
//             type="video/mp4"
//             controls
//             className="videoplayer"
//             poster={image_url}
//           ></video>

//           <h2>{title}</h2>
//           <p>{description}</p>

//           <form onSubmit={handleComment}>
//             <label>Add comment</label>
//           <input type='text' name='body' placeholder="comment"/>
//           <input type='number' name='user_id' placeholder="user id"/>
//             <button type='submit'>comment</button>
//           </form>
//         </div>
//       );
//     };

//     export default VideoDescriptionCard;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const VideoDescriptionCard = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false); // added state for "liked" status
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/uploads/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleVideo(data);
      });
  }, []);

  const { title, description, image_url, upload_url } = singleVideo;

  function handleComment(e){
    e.preventDefault();
    const newComment = {
      user_id : e.target.user_id.value,
      content_id : id,
      body: e.target.body.value
    }

    //  console.log(newComment);
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  function handleLike() {
    // Toggle the "liked" state when the like button is clicked
    setLiked(!liked);

    // Send a POST request to the API to create or destroy the "like" association
    fetch(`http://localhost:3000/api/videos/${id}/likes`, {
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

      <h2>{title}</h2>
      <p>{description}</p>

      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'} {/* Toggle the text of the button based on the "liked" state */}
      </button>

      <form onSubmit={handleComment}>
        <label>Add comment</label>
        <input type='text' name='body' placeholder="comment"/>
        <input type='number' name='user_id' placeholder="user id"/>
        <button type='submit'>comment</button>
      </form>
    </div>
  );
};

export default VideoDescriptionCard;

