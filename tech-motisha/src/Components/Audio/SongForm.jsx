import { useState } from 'react';
import musicData from '../assets/music';

function AddSongForm({ onAddSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [poster, setPoster] = useState('');
  const [duration, setDuration] = useState(0);
  const [source, setSource] = useState('');
  const [type, setType] = useState('');

  const handleAddSong = (e) => {
    e.preventDefault();
    const newSong = {
      id: musicData.length + 1,
      title,
      artist,
      poster,
      duration,
      source,
      type
    };
    onAddSong(newSong);
    setTitle('');
    setArtist('');
    setPoster('');
    setDuration('');
    setSource('');
  };

  return (
    <form className="bg rounded-lg px-4 py-2 text-white " onSubmit={handleAddSong}>
      <label> 
        Title:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <label>
        Poster:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />
      </label>
      <label>
        Duration:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Source:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" value={source} onChange={(e) => setSource(e.target.value)} />
      </label>
      <label>
        Type:
        <input className="bg text-black w-half focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
