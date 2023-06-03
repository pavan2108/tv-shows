import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShowDetails from './components/ShowDetails';
import BookShow from './components/BookShow';
import './App.css';

function App() {
  return (
    // Wrap the app with the Router component for routing
    <Router>
      <Routes>
        {/* Define the routes and their corresponding components */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
        <Route path="/book-show/:movieName" element={<BookShow />} />
      </Routes>
    </Router>
  );
}

export default App;
