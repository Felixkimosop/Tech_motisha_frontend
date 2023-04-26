import React, { useState, useRef,createRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.css';
import AddSongForm from './SongForm';
import SubscriptionForm from './SubscriptionForm';
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
  const [showAllComments, setShowAllComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false); // add state variable for comment input

  // Only show the first three comments by default
  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  const handleShowMoreClick = () => {
    setShowAllComments(true);
  };

  const handleEnvelopeClick = () => { // function to show comment input
    setShowCommentInput(true);
  };

  return (
    <div className="comment-container w-full">
      <h4 className="text-lg font-medium mb-2">Comments:</h4>
      {displayedComments.map((comment, index) => (
        <p key={index} className="text-sm mb-1">
          {comment}
        </p>
      ))}
      {!showAllComments && comments.length > 3 && (
        <button onClick={handleShowMoreClick} className="text-sm text-white-600 hover:text orange-800">
          Show more
        </button>
      )}
  {/* render comment input section conditionally */}
        {showCommentInput && <CommentForm onCommentSubmit={handleCommentSubmit} />}
        {!showCommentInput && <FontAwesomeIcon icon={faComment} className="icon" onClick={handleEnvelopeClick} />} 
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
        <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded hover:bg-indigo-700">Submit  </button>
      </form>
    </div>
  );
};


function AudioPlayer({id}) {
  const audioRef = useRef(musicData.map(() => createRef()));
  const [songs, setSongs] = useState(musicData);
  const [showForm, setShowForm] = useState(false);
  
  const [isPlayingList, setIsPlayingList] = useState(musicData.map(() => false));

  const togglePlayPause = (index) => {
    const audio = audioRef.current[index].current;
    const isPlaying = isPlayingList[index];
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    const newList = [...isPlayingList];
    newList[index] = !isPlaying;
    setIsPlayingList(newList);
  };
  
  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]);
    setShowForm(false);
  };

  const handleSubscribe = (email) => {
    alert(`Subscribed with email: ${email}`);
  };
  const musicList = musicData.map((song, index) => {

    return (
    <div className="audio-card rounded-lg overflow-hidden shadow-lg text-white" key={song.id}>
      <div className="relative">
        <img src={song.poster} alt={song.title} className="w-full h-auto object-cover" />
        <button className="play-pause absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-800 text-white py-2 px-4 rounded-lg" onClick={() => togglePlayPause(index)}>
          {isPlayingList[index] ? 'Pause' : 'Play'}
        </button>
      </div>

      <h3 className="text-lg font-bold mb-2">{song.title}</h3>
      <p className="text-gray-700">{song.artist}</p>
      <audio ref={audioRef.current[index]} className="w-full my-4">
        <source src={song.source} type={song.type} />
      </audio>
      <div className="audio-controls flex items-center justify-between">
        <div className="audio-icons flex justify-center items-center gap-4">
          <FontAwesomeIcon icon={faHeart} />

          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </div>
      </div>
      <SongComments id={song.id} />
      <SubscriptionForm onSubscribe={handleSubscribe} />
    </div>
  );
  });

  const handleNewSongClick = () => {
    setShowForm(true);
  };

  return (
    <div className="audio-player-container justify-between flex flex-wrap items-center bg- text-green-600 text-md font-serif">
      {musicList}
      {showForm && <AddSongForm onAddSong={handleAddSong} className="z-50" />}
      <button className="fixed top-20 left-20 z-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={handleNewSongClick}>Add New Song</button>

    </div>
  );
}

export default AudioPlayer;
