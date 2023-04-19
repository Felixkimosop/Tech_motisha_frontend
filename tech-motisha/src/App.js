import React from 'react';
import AudioPlayer from './components/AudioPlayer.jsx';
import musicData from './assets/music';
import './components/AudioPlayer.css'

const App = () => {
  return (
    <div className="my-header">
      <h1>Tech Bootcamp News</h1>
      {musicData.map(song => (
        <AudioPlayer key={song.id} song={song} />
      ))}
    </div>
  );
};

export default App;
