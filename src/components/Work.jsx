
import '../styles/Portfolio.css';
import { Button } from './Button';
import pic from '../images/background2.jpg'
import { Link } from 'react-router-dom';

const Work = ({ portfolios }) => {

    return (
        <>
            {portfolios.map((portfolio) => (
                <div key={portfolio.id} class="work-container" style={{ backgroundImage: `url(${pic})`, }}>
                    <div class="overlay-work">
                        <div class="items"></div>
                        <div class="items header">
                            <p>{portfolio.title}</p>
                        </div>
                        <div class="items header">
                            <Link to={`/portfolio/${portfolio.id}`}>
                                <Button
                                    buttonStyle='btn-other'
                                    buttonSize='btn-medium'
                                >
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Work