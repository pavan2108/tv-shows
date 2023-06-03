import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookShow() {

  const { movieName } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name,
      email,
      movieName
    };

    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Perform any other booking-related actions here

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Book Show</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Movie Name:
          <input type="text" value={movieName}  />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookShow;

