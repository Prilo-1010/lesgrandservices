import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import Contact from './pages/Contact';
import { Portfolio, PortfolioDetails } from './pages/Portfolio';
import { Blogs, BlogDetails } from './pages/Blogs';
import { CircleLoader } from 'react-spinners';
import './styles/App.css'
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ?
        <div className='loader'>
          <CircleLoader color='#FFE184' loading={loading} size={100} />
        </div>
        :
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:id' element={<PortfolioDetails />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      }
    </>
  );
}

export default App;
