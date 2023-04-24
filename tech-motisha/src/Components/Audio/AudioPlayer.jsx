import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.css'
import musicData from '../assets/music';

// Custom hook for managing comments
function useComments() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return [comments, handleCommentSubmit];
}

// SongComments component using the custom hook
function SongComments({ id }) {
  const [comments, handleCommentSubmit] = useComments();

  return (
    <div className="comment-container w-full">
      <h4 className="text-lg font-medium mb-2">Comments:</h4>
      {comments.map((comment, index) => (
        <p key={index} className="text-sm mb-1">{comment}</p>
      ))}
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}

// CommentForm component using the custom hook
function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(comment.trim());
      setComment('');
    }
  };

  return (
    <div className="comment-form-container w-full">
      <form onSubmit={handleSubmit} className="flex">
        <input type="text" placeholder="Add your comment" class="border-2 border-gray-800 rounded-md mb-2 p-2 w-full text-base" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit" class="bg-indigo-800 text-white py-2 px-4 rounded">Submit</button>
    </form>
    </div>
  );
}

// SubscriptionForm component
function SubscriptionForm({ onSubscribe }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()&& isValidEmail) {
      onSubscribe(email);
      setSubscribed(true);
    }
    else {
      setShowEmailError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
    setShowEmailError(false);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div class="subscribe-container w-full">
      <p class="font-medium mb-2">Subscribe to our newsletter</p>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} class="border-2 border-gray-800 rounded-md mb-2 p-2 w-full text-base"
       onChange={handleEmailChange} placeholder="Enter your email address"
        style={{ borderColor: isValidEmail || !showEmailError ? 'initial' : 'red' }}
        />
      {showEmailError && <p>Please enter a valid email address.</p>}
      <button type="submit"  class="bg-indigo-800 text-white py-2 px-4 rounded" disabled={subscribed}>
        {subscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </form>
  </div>
    );
}

// AudioPlayer component
function AudioPlayer(props) {
  // Define references
  const audioRef = useRef(null);
  
  const [liked, setLiked] = useState(false);

  const musicList = musicData.map((song) => {

    // Functions to handle state changes
    const toggleLikes = () => {
      setLiked(!liked);
    };

    return (
      <div key={song.id} className="bg-white shadow-md rounded-md mb-4 p-4">
        <h3 className="text-lg font-bold mb-2">{song.title}</h3>
        <img src={song.poster} alt={song.title} className="w-full h-auto mb-4" />
        <p className="text-gray-700">{song.artist}</p>
        <audio ref={audioRef}  className="w-full mb-4">
           {/* controls onError={() => alert('Failed to load audio file.') */}
          <source src={song.source} type={song.type} />
        </audio> 
       
        <div className='flex justify-between items-center'>
          <button onClick={toggleLikes} className="bg-white hover:bg-gray-100 focus:bg-gray-100 rounded-full p-2 mr-2">
            <FontAwesomeIcon icon={faHeart} title='Like' className={`text-red-500 ${liked ? 'fill-current' : 'fill-none'}`} />
          </button>
          <button className="bg-white hover:bg-gray-100 focus:bg-gray-100 rounded-full p-2 mr-2">
            <FontAwesomeIcon icon={faComment} title='Comment' className="text-orange-500" />
          </button>
          <button  className="bg-white hover:bg-gray-100 focus:bg-gray-100 rounded-full p-2">
            <FontAwesomeIcon icon={faEnvelope} title='Send' className="text-orange-500" />
          </button>
          </div>
          <SubscriptionForm onSubscribe={() => console.log(`Subscribed to ${song.title}`)} />
        
        <SongComments id={song.id} />
      </div>
    );
  });

  return (
   <div class="audio-player-container justify-around flex flex-wrap items-center bg-blue-900 text-white text-md font-serif">
     {musicList}
    </div>
    
  );
}


export default AudioPlayer;
