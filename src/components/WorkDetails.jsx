import '../styles/Portfolio.css';
import { Link } from 'react-router-dom'
import pic from '../images/background2.jpg'
import { VscArrowLeft, VscArrowRight, VscChromeClose } from 'react-icons/vsc';

const WorkDetails = ({ portfolio }) => {

    console.log(portfolio)

    return (
        <div >
            {portfolio.map((portfolio) => (
                <div className="project-container">
                    <div class="top-link">
                            <div className='arrows'>
                                <Link onClick={() => {portfolio.id -= 1}} to={`/portfolio/${portfolio.id}`} className='wlink'><VscArrowLeft /></Link>
                                <Link onClick={() => {portfolio.id += 1}} to={`/portfolio/${portfolio.id}`} className='wlink'><VscArrowRight /></Link>
                            </div>
                            <div className='close-work'>
                                <Link className='wlink' to='/portfolio'>
                                    <VscChromeClose />
                                </Link>
                            </div>

                        </div>
                    <div key={portfolio.id} class="project" >
                        
                        <img className="img-work" src={pic}></img>
                    </div>
                    <div className='project-link'>
                        <Link className='wlink' to='/portfolio'>www.portfolio/{portfolio.title}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkDetails