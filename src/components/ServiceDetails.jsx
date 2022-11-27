import { useState } from "react";
import { Button } from "./Button";


const ServiceDetails = (props) => {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(false);

    return (
        <div className='service-items'>
            <h2>{props.header}</h2>
            <p>{props.subheader}</p>
            {click &&  <div id={`${props.header}`} className="overlay">
               <div className="popup">
          <i className="close" onClick={handleClick}>&times;</i>
                    <div className="content" style={{width: 'auto', alignItems:'center', display: "flex", textAlign:'center'}}>
                        {props.details}
                    </div>
                </div>
            </div>}
            <a href={`#${props.header}`}>
                <Button
                    buttonSize="btn-medium"
                    buttonStyle='btn-view'
                >
                    view more
                </Button>
            </a>

        </div>
    );
}

export default ServiceDetails;