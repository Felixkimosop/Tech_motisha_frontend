import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEnvelope, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

const AudioCard = ({audio}) => {

    const {id, description, upload_url, image_url, title} = audio

  return (
    <div className="bg-[#bbc0cc] audio-card rounded-lg overflow-hidden shadow-lg text-white" key={id}>
    <div className='relative flex items-center justify-center'>
      <img src={image_url} alt={title}  />
      <button className="absolute text-3xl play-pause rounded-full filter-orange text-white py-2 px-4 " >

      </button>
    </div>
    <div className="p-4">
      <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading[43px] text-[#031027]">{title}</h3>
      <p className="text-primary">Artist</p>
      <audio className="w-full my-4">
        <source src={upload_url} />
      </audio>
      <div className="audio-controls flex items-center justify-between">
        <div className="audio-icons flex justify-center items-center gap-4">
          <FontAwesomeIcon icon={faHeart} className="icon filter-orange" />
          <FontAwesomeIcon icon={faComment} className="icon filter-orange" />
          <FontAwesomeIcon icon={faEnvelope} className="icon filter-orange" />
        </div>
      </div>
      {/* <SongComments id={song.id} /> */}
      {/* <SubscriptionForm onSubscribe={handleSubscribe} /> */}
    </div>
  </div>
  )
}

export default AudioCard
