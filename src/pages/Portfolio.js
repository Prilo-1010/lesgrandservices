import React from 'react';
import '../styles/Portfolio.css';
import Work from '../components/Work';
import WorkDetails from '../components/WorkDetails';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';


  
export const Portfolio = () => {
  const { data: works, error, loading } = useFetch('portfolio')
  return (
    <>
      <div className='portfolio'>
        <div className='portfolio-container' >
          <div className='ctext'>
            <h1>Portfolio</h1>
            <p>All the projects we have done... </p>
          </div>
          <div className='portfolio-main'>
            {error && <div>{error}</div>}
            {loading && <div className='btext'><h2>Loading..</h2></div>}
            {works && <Work portfolios={works} />}
          </div>
        </div>
      </div>
    </>
  )
}

export const PortfolioDetails = () => {
  const { id } = useParams()
  const { data: work, error, loading } = useFetch(`/portfolio/${id}`)
  return (
    <>
      <div className='portfolio'>
        <div className='portfolio-container' >
            {error && <div>{error}</div>}
            {loading && <div className='btext'><h2>Loading..</h2></div>}
            {work && <WorkDetails portfolio={work} />}
          </div>
        </div>
    </>
  )
}