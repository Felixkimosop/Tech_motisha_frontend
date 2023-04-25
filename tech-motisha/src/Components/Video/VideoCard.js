import React from 'react'
import { Link } from 'react-router-dom'
import '../Video/styles/VideoCard.css'

const VideoCard = ({video}) => {

    const {id,title,decription,image_url} = video

  return (

    <div className='container'>
        <div className="image-container">
            <img src={image_url} alt={title}/>
        </div>
            <div className='video-content'>
                <h2>{title}</h2>
                <p>{decription}</p>
              <Link className='watch' to={`/videos/${id}`}>Watch Video</Link>
            </div>
    </div>
  )
}

export default VideoCard
