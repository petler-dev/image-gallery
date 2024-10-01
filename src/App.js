import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.scss';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('nature');

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/search/photos?query=${query}&client_id=JUlsfiJRCcB5UiPDxbXeFkEtjP8rGnPUwq6Pspxt7ik`)
      .then((response) => setImages(response.data.results));
  }, [query]);

  return (
    <div className="gallery-app">
      <h1>Image Gallery</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images"
      />
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
