import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column m-2">
        <h1 className='text-center'>Organize your <br /> work and life finally.</h1>
        <p className='text-center'>Become focused, organized and calm with Todo app. Best Task Manager App.</p>
        <Link to="/todo">
          <button className='home-btn p-2'>Make Todo List</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;