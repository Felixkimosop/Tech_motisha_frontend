import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Video/styles/VideoCard.css'
import { faHeart, faComment, faEnvelope, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoCard = ({video, comments}) => {

  const {id,title,decription,image_url} = video

    console.log(id);

    const commentPerVideo = comments.filter((comment)=>{
        return comment.content_id === id
    })

  return (

    <div className='container'>
        <div className="image-container">
            <img src={image_url} alt={title}/>
        </div>
            <div className='video-content'>
                <h2>{title}</h2>
                <p>{decription}</p>
              <Link className='watch' to={`/videos/${id}`}>Watch Video</Link>

              <FontAwesomeIcon icon={faComment} className="icon filter-orange" />{commentPerVideo.length}
              <FontAwesomeIcon icon={faHeart} className="icon filter-orange" /> 5
            </div>
    </div>
  )
}

export default VideoCard
