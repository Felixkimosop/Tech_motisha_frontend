import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.css';
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
        <p key={index} className="text-sm mb-1">
          {comment}
        </p>
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
        <input
          type="text"
          placeholder="Add your comment"
          className="border-2 border-gray-800 rounded-md mb-2 p-2 w-full text-base text-gray-800"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded">
          Submit
        </button>
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
    if (email.trim() && isValidEmail) {
      onSubscribe(email);
      setSubscribed(true);
    } else {
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
    <div className="subscribe-container w-full">
      <p className="font-medium mb-2">Subscribe to our newsletter</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          className="border-2 border-black-800 rounded-md mb-2 p-2 w-full text-base"
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          style={{ borderColor: isValidEmail || !showEmailError ? 'initial' : 'red' }}
        />
        {showEmailError && <p>Please enter a valid email address.</p>}
        <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded" disabled={subscribed}>
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

function AudioPlayer({ id }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSubscribe = (email) => {
    alert(`Subscribed with email: ${email}`);
  };

  const musicList = musicData.map((song) => {
    return (
      <div className="audio-player" key={song.id}>     
        <div className="audio-controls">
          <h3 className="text-lg font-bold mb-2">{song.title}</h3>
          <img src={song.poster} alt={song.title} className="w-full h-auto mb-4 rounded-lg" />
          <p className="text-gray-700">{song.artist}</p>
          <audio ref={audioRef} className="w-full mb-4">
            <source src={song.source} type={song.type} />
          </audio> 
          <button className="play-pause bg-indigo-800 text-white py-2 px-4 rounded-lg" onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="audio-icons flex justify-center items-center gap-4 mt-4">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <FontAwesomeIcon icon={faComment} className="icon" />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
        </div>
        <SongComments id={id} />
        <SubscriptionForm onSubscribe={handleSubscribe} />
      </div>
    );
  });

  return (
    <div className="audio-player-container justify-between flex flex-wrap items-center bg- text-white text-md font-serif">
      {musicList}
    </div>
  );
}

export default AudioPlayer;