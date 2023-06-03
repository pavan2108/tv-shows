
import React, {useEffect, useState} from 'react'
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
function HomePage() {
    const [searchedShows, setSearchedShows] = useState([]);
    const [defaultShows, setDefaultShows] = useState([]);
    const [searchTerms, setSearchTerms] = useState('');
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
    <div>
        <SearchBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
        <h2>Shows</h2>
        {searchedShows.map(show => (
          <div key={show.id}>
            <img src={show.image?.medium} alt={show.name} />
            <h3>name: {show.name}</h3>
            <h3>id:{show.id}</h3>
            <p>Genre: {show.genres.join(', ')}</p>
            <Link to={`/shows/${show.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
        {defaultShows.map(show => (
          <div key={show.id}>
            <img src={show.image?.medium} alt={show.name} />
            <h3>name: {show.name}</h3>
            <h3>id: {show.id}</h3>
            <p>Genre: {show.genres.join(', ')}</p>
            <Link to={`/shows/${show.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
        </div>
  )
}
export default HomePage

