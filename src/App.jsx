// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components//CafeList/CafeList';
import './App.css';
import React from 'react';

export default function App() {

  const [cafes, setCafes] = React.useState([]);

  React.useEffect(() => {
    const url = 'http://localhost:3000/api/v1/cafes';
    fetch(url)
      .then(response => response.json())
      .then(data=> {
        setCafes(data);
      });
  }, []);

  return (
    <div className='app-frame'>
      <Navbar setCafes={setCafes}/>
      <div className="app-body">
        <Sidebar />
        <CafeList cafes={cafes} />
      </div>

    </div>
  );
}
