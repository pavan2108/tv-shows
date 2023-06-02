import React from 'react';

function SearchBar(props){

  return (
    <div>
        <form>
            <input type="text"
            value={props.searchTerms}
            onChange={(event) => {
              props.setSearchTerms(event.target.value)
            }}
            placeholder="Search a movie"
            />
        </form>
    </div>
  )
}

export default SearchBar;