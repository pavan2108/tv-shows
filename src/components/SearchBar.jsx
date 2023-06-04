import React from 'react';

function SearchBar(props) {
  // Render the search bar component
  return (
    <div>
      {/* Search form */}
      <form>
        {/* Input field for searching */}
        <input
          type="text"
          value={props.searchTerms}
          onChange={(event) => {
            // Update the search terms when the input value changes
            props.setSearchTerms(event.target.value);
          }}
          placeholder="Search a show"
        />
      </form>
    </div>
  );
}

export default SearchBar;
