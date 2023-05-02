import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Video/styles/VideoCard.css'
import { faHeart, faComment, faEnvelope, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoCard = ({video, comments}) => {

  const {id,title,decription,image_url, category} = video

    console.log(id);

    const commentPerVideo = comments.filter((comment)=>{
        return comment.content_id === id
    })

  return (

    <div className='container_video'>
        <div className="image-container relative flex items-center justify-center">
            <img src={image_url} alt={title}/>
            <Link className="absolute text-3xl play-pause rounded-full filter-orange text-white py-2 px-4 " to={`/videos/${id}`}><FontAwesomeIcon icon={faPlayCircle}/></Link>
        </div>
            <div className='video-content'>
                <h2>{title}</h2>
              <FontAwesomeIcon icon={faComment} className="icon filter-orange" />{commentPerVideo.length}
              <FontAwesomeIcon icon={faHeart} className="icon filter-orange" /> 5
            </div>
    </div>
  )
}

export default VideoCard
