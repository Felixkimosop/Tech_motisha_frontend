import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Video/styles/VideoCard.css'
import { faHeart, faComment, faEnvelope, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../commons/style';


const VideoCard = ({video, comments}) => {

  const {id,title,decription,image_url, category} = video

    console.log(id);

    const commentPerVideo = comments.filter((comment)=>{
        return comment.content_id === id
    })

  return (

    <div className='flex flex-col m-5'>
        <div className="image-container relative flex items-center justify-center">
            <img className="w-80 h-60 object-cover rounded-xl mb-4" src={image_url} alt={title}/>
            <Link className="absolute text-3xl play-pause rounded-full filter-orange text-white py-2 px-4 " to={`/videos/${id}`}><FontAwesomeIcon icon={faPlayCircle}/></Link>
        </div>
        <div className="flex flex-row">
           <img src={image_url} alt={title} className="w-[48px] h-[48px] rounded-full" />
           <div className="flex flex-col ml-4">
               <h4 className="font-poppins  font-semibold text-[20px] leading-[32px] text-[#031027]">
                 {title}
                </h4>
            </div>
        </div>
          <div className='ml-16'>
                <h2 className={`${styles.paragraph} font-poppins text-slate-600 max-w-[470px]`}>{title}</h2>
              <FontAwesomeIcon icon={faComment} className="icon filter-orange" />{commentPerVideo.length}
              <FontAwesomeIcon icon={faHeart} className="icon filter-orange ml-5" /> 5
            </div>
    </div>
  )
}

export default VideoCard
