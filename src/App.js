
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDetails from './components/showDetails';
import HomePage from './components/HomePage';
import "./App.css"
import BookShow from './components/bookShow';


function App() {



  return (
    
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="/book-show/:movieName" element={<BookShow />} />
        </Routes>
    </Router>
  );
}

export default App;
