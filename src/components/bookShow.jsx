import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function BookShow() {
  // Get the location object from react-router-dom
  const location = useLocation();

  // Retrieve the showName from location state or set it to an empty string if not available
  const showName = location.state?.showName || '';

  // State variables for name and email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Event handler for name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user details object
    const userDetails = {
      name,
      email,
      showName: showName
    };

    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Perform any other booking-related actions here

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <h2>Book Show</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label>
          Name: 
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />

        {/* Email input */}
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />

        {/* Show input */}
        <label>
          Show:
          <input type="text" value={showName} disabled />
        </label>
        <br />

        {/* Submit button */}
        <button className="book-button" type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookShow;
