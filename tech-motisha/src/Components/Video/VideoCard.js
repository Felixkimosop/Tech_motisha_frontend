import React from 'react'
import { Link } from 'react-router-dom'
import '../Video/styles/VideoCard.css'

const VideoCard = ({video}) => {

    const {id,title,decription,thumbnail_url} = video

  return (

    <div className='container'>
        <div className="image-container">
            <img src={thumbnail_url} alt={title}/>
        </div>
            <div>
                <h2>{title}</h2>
                <p>{decription}</p>
                <button><Link to={`/videos/${id}`}>Watch Video</Link></button>
            </div>
    </div>
  )
}

export default VideoCard
