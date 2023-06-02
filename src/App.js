
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import SearchBar from './components/searchBar';
import ShowDetails from './components/showDetails';

function App() {
  const [searchTerms, setSearchTerms] = useState('');
  const [searchedShows, setSearchedShows] = useState([]);
  const [defaultShows, setDefaultShows] = useState([]);

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
    
    <Router>
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
        <Routes>
          <Route path="/shows/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import SearchBar from './components/searchBar';

// function App() {
//   const [searchTerms, setSearchTerms] = useState('');
//   const [searchedShows, setSearchedShows] = useState([]);
//   const [defaultShows, setDefaultShows] = useState([]);

//   useEffect(() => {
//     const fetchDefaultShows = async () => {
//       try {
//         const response = await fetch('https://api.tvmaze.com/shows');
//         const data = await response.json();
//         setDefaultShows(data);
//       } catch (error) {
//         console.error('Error fetching default shows:', error);
//       }
//     };

//     fetchDefaultShows();
//   }, []);

//   useEffect(() => {
//     const fetchShows = async () => {
//       try {
//         const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerms}`);
//         const data = await response.json();
//         setSearchedShows(data.map(item => item.show));
//       } catch (error) {
//         console.error('Error fetching shows:', error);
//       }
//     };

//     fetchShows();
//   }, [searchTerms]);

//   return (
//     <div>
//       <SearchBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
//       <h2>Shows</h2>
//       {searchedShows.map(show => (
//         <div key={show.id}>
//           <img src={show.image?.medium} alt={show.name} />
//           <h3>{show.name}</h3>
//           <p>Genre: {show.genres.join(', ')}</p>
//           {/* Additional show details */}
//         </div>
//       ))}
//       {defaultShows.map(show => (
//         <div key={show.id}>
//           <img src={show.image?.medium} alt={show.name} />
//           <h3>{show.name}</h3>
//           <p>Genre: {show.genres.join(', ')}</p>
//           {/* Additional show details */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SearchBar from './components/searchBar';
// import ShowDetails from './components/showDetails';

// function App() {
//   const [searchTerms, setSearchTerms] = useState('');
//   const [searchedShows, setSearchedShows] = useState([]);
//   const [defaultShows, setDefaultShows] = useState([]);

//   useEffect(() => {
//     const fetchDefaultShows = async () => {
//       try {
//         const response = await fetch('https://api.tvmaze.com/shows');
//         const data = await response.json();
//         setDefaultShows(data);
//       } catch (error) {
//         console.error('Error fetching default shows:', error);
//       }
//     };

//     fetchDefaultShows();
//   }, []);

//   useEffect(() => {
//     const fetchShows = async () => {
//       try {
//         const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerms}`);
//         const data = await response.json();
//         setSearchedShows(data.map(item => item.show));
//       } catch (error) {
//         console.error('Error fetching shows:', error);
//       }
//     };

//     fetchShows();
//   }, [searchTerms]);

//   return (
//     <Router>
//       <div>
//         <SearchBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
//         <h2>Shows</h2>
//         {searchedShows.map(show => (
//           <div key={show.id}>
//             <img src={show.image?.medium} alt={show.name} />
//             <h3>{show.name}</h3>
//             <h3>{show.id}</h3>
//             <p>Genre: {show.genres.join(', ')}</p>
//             <Link to={`/shows/${show.id}`}>
//               <button>View Details</button>
//             </Link>
//           </div>
//         ))}
//         {defaultShows.map(show => (
//           <div key={show.id}>
//             <img src={show.image?.medium} alt={show.name} />
//             <h3>{show.name}</h3>
//             <h3>{show.id}</h3>
//             <p>Genre: {show.genres.join(', ')}</p>
//             <Link to={`/shows/${show.id}`}>
//               <button>View Details</button>
//             </Link>
//           </div>
//         ))}
//         <Routes>
//           <Route path="/shows/:id" element={<ShowDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;