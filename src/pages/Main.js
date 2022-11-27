import Home from '../sections/Home';
import About from '../sections/About';
import Service from '../sections/Service';
import { useState, useEffect, useRef } from 'react';
import { CircleLoader } from 'react-spinners';

const Main = () => {

  const about = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  })

  return (
    <>
      {loading ?
        <div className='loader'>
          <CircleLoader color='#FFE184' loading={loading} size={100} />
        </div> :
        <div>
          <Home
            scroll={()=>scrollToSection(about)}
          />
          <About
            id='s'
            refer={about}
          />
          <Service />
        </div>}

    </>
  )
}

export default Main