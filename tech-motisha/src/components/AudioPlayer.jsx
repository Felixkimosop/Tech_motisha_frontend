import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.css'

const AudioPlayer = ({ song }) => {

  // Define states
  const [playing, isPlaying] = useState(false);
  const [liked, isLiked] = useState(false);
  const [commenting, isCommenting] = useState(false);
  const [subscribed, isSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  // Define references
  const audioRef = useRef(null);
  
   // Functions to handle state changes
  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      isPlaying(true);
    } else {
      audioRef.current.pause();
      isPlaying(false);
    }
  };

  const toggleLikes = () => {
    isLiked(!liked);
  };

  const commentToggle = () => {
    isCommenting(!commenting);
  };

  const subscriptionToggle = () => {
    isSubscribed(!subscribed);
  };

  const handleComment = (e) => {
    e.preventDefault();
    // Add new comment to the list of comments
    setComments([...comments, comment]);
    // Reset comment state to empty string
    setComment('');
  };

  const handleCommentChange = (e) => {
    // Update comment state with user input
    setComment(e.target.value);
  };

  const handleEmailChange = (e) => {
    // Update subscriber email state with user input
    setSubscriberEmail(e.target.value);
  };

  const  handleSubscription = (e) => {
    e.preventDefault();
    // Log email to console (in a real application, you would likely send this data to a server)
    console.log(`Subscribed with email: ${subscriberEmail}`);
    // Update subscription state to true
    isSubscribed(true);
  };
  
  // Render the audio player with conditional rendering based on state
return (
  <div className="audio-player-container">
    <div className="poster-container">
      <img className="poster" src={song.poster} alt={song.title} />
    </div>
  <div className="song-container">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
  </div>

  <div className="audio-control">
    <button onClick={togglePlay}>
      {playing ? 'Pause' : 'Play'}
    </button>

    <button onClick={toggleLikes}>
       <FontAwesomeIcon icon={faHeart} title='Like' color={liked ? 'red' : 'white'} />
    </button>

    <button onClick={commentToggle}>
       <FontAwesomeIcon icon={faComment} title='Comment'/>
    </button>

    <button onClick={subscriptionToggle} title='Subscribe'>
      <FontAwesomeIcon icon={faEnvelope} color={subscribed ? 'green' : 'white'} />
    </button>
    
    <audio ref={audioRef} src={song.src} type="audio/mpeg" />             
  </div> 

{/* Comment container */}
  {commenting &&
    <div className="comment-container">
      <h4>Comments</h4>
        <ul>
  {comments.map((comment, index) => (
        <li key={index}>{comment}</li>))}
        </ul>
      <form onSubmit={handleComment}>
      <input type="text" placeholder="Add a comment" value={comment} onChange={handleCommentChange} />
      <button type="submit">Submit</button>
      </form>
    </div>
      }

{/* Subscription container */}
  {subscribed ?
    <div className="subscription-container">
       <p>Thanks for subscribing!</p>
    </div>
        :
  <div className="subscription-container">
    <form onSubmit={ handleSubscription}>
      <input type="email" placeholder="Enter your email address" value={subscriberEmail} onChange={handleEmailChange} />
    <button type="submit">Subscribe</button>
    </form>
  </div>
  } 
</div>
);
};

export default AudioPlayer;