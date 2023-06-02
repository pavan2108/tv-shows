import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();

  const fetchShowDetails = async () => {
    const URL = `https://api.tvmaze.com/shows/${id}`;

    const response = await fetch(URL);
    const data = await response.json();
    setShow(data);
  };

  useEffect(() => {
    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-card">
      <img src={show.image?.medium} alt={show.name} />
      <div className='movie-details-content'>
        <h1>{show.name}</h1>
        <p>Genre: {show.genres ? show.genres.join(', ') : 'Unknown'}</p>
      </div>
    </div>
  );
}

export default ShowDetails;
