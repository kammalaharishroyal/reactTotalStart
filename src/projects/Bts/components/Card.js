import logo1 from '../Images/bus1.png';
import mobilelogo from '../Images/mobile-logo.png';
import emaillogo from '../Images/email-logo.png';
import { Link } from 'react-router-dom';
import "./css/card.css";

function card(props) {
    
    return (
        <div className="card1">
            {props.status===0&&<div>Available</div>}
            <div>
                
                <img src='https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1024' />
                <h4>{props.name}</h4>
            </div>
            <div className="busData">
                <section className="numlogo">
                <i class="fa-solid fa-bus"></i>
                    <strong>{props.mobile}</strong>
                </section>
                <div className="email">
                <i class="fa-regular fa-envelope"></i>
                <strong>bus@gmail.com</strong>
                <h5>availble:{props.mail}</h5>
                <Link to={`/bus/${props.mobile}`}><button>Book</button></Link>
                </div>


                
            </div>


        </div>




    )
}
export default card;