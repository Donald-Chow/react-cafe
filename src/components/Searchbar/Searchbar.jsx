import React from 'react';

const Searchbar = ({setCafes}) => {

  function handleChange(event) {
    const params = event.currentTarget.value;
    const url = `http://localhost:3000/api/v1/cafes?title=${params}`;
    fetch(url)
      .then(response => response.json())
      .then(data=> {
        setCafes(data);
      });
  }

  return (
    <div>
      <div className="searchbar input-group">
        <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
        <input placeholder="Starbucks" type="text" className='form-control' onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Searchbar;
