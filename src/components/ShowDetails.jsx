import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ShowDetails() {
  // State to hold the show details
  const [show, setShow] = useState([]);
  // Get the show ID from the URL params
  const { id } = useParams();
  // Create a navigate function from react-router-dom to handle navigation
  const navigate = useNavigate();

  // Fetch show details based on the ID
  const fetchShowDetails = async () => {
    const URL = `https://api.tvmaze.com/shows/${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    setShow(data);
  };

  // Handle booking the show and navigate to the book show page
  const handleBookShow = (showName) => {
    navigate(`/book-show/${encodeURIComponent(showName)}`, { state: { showName } });
  };

  
  // Fetch show details on component mount
  useEffect(() => {
    fetchShowDetails();
  }, [id]);

  // Render loading if show details are not yet available
  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-card">
      {/* Show image */}
      <img src={show.image?.medium} alt={show.name} />

      <div className="show-details-content">
        {/* Show name */}
        <h1>{show.name}</h1>
        {/* Show genres */}
        <p>Genre: {show.genres ? show.genres.join(', ') : 'Unknown'}</p>
        {/* Show summary */}
        <p>{show.summary}</p>
      </div>

      {/* Book show button */}
      <button onClick={() => handleBookShow(show.name)}>Book Show</button>
    </div>
  );
}

export default ShowDetails;
