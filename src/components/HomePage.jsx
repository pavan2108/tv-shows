import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function HomePage() {
  // State variables
  const [searchedShows, setSearchedShows] = useState([]);
  const [defaultShows, setDefaultShows] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  // Fetch default shows on component mount
  useEffect(() => {
    const fetchDefaultShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        setDefaultShows(data);
      } catch (error) {
        console.error('Error fetching default shows:', error);
      }
    };

    fetchDefaultShows();
  }, []);

  // Fetch shows based on search terms
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerms}`);
        const data = await response.json();
        setSearchedShows(data.map(item => item.show));
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, [searchTerms]);

  return (
    <div className="show-list">
      {/* SearchBar component */}
      <SearchBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} />

      {/* Heading */}
      <h2>SHOWS</h2>

      {/* Display searched shows */}
      <div className="show-list-wrapper">
        {searchedShows.map(show => (
          <div key={show.id} className="show-list-card">
            <img src={show.image?.medium} alt={show.name} />
            <h3>Show Name: {show.name}</h3>
            <p>Genre: {show.genres.join(', ')}</p>
            <div className="home-button">
              <Link to={`/shows/${show.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Display default shows */}
      <div className="show-list-wrapper">
        {defaultShows.map(show => (
          <div key={show.id} className="show-list-card">
            <img src={show.image?.medium} alt={show.name} />
            <h3>Show Name: {show.name}</h3>
            <p>Genre: {show.genres.join(', ')}</p>
            <div className="home-button">
              <Link to={`/shows/${show.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
