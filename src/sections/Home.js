import React from 'react';
import '../styles/Home.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom'

function Home({ scroll }) {
  return (
    <>
      <div className='home'>
        <div className='subHero'>
          <div className='subHero1 animate-this-element'>
            <h1>Make Your </h1>
            <h1>Service Great</h1>
            <h1>With <span>LGS</span></h1>
            <p><span className='p'>Les Grand Services </span></p>
            <Link to="/" onClick={scroll}>
              <Button
                buttonStyle='btn-primary'
                buttonSize='btn-large'
              >
                Get to know us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home