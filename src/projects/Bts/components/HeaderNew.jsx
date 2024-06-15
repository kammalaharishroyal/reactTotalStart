import { Link } from "react-router-dom";
import logo1 from '../Images/react-logo.png'
import "./css/HeaderNew.css";
function HeaderNew(){
    return (
        <header >
    
       
    <nav className='nav'>
                
                    <img src={logo1} className="imgpage2"/>
                
                <h2>BTS</h2>
                <input placeholder="search here" className="searchbox"></input>
                <ul className="navitems">
                    <li><Link to='/bts'><button >Home</button></Link></li>
                    <li><Link to={'/bus'}><button >Explore</button></Link></li>
                    <li><Link to={'orders'}><button >Orders</button></Link></li>
                    <li><Link to={'/account'}><button>Account</button></Link></li>
                    <li><Link to={'/login'}><button>Login</button></Link></li>
                    <li><Link to={'/about'}><button>About</button></Link></li>
                    <li><Link to={'/contact'}><button>ContactUs</button></Link></li>
                    <li><button>Logout</button></li>
                    <li><Link to="/register"><button>Register</button></Link></li>
                </ul>

            </nav>
     
    </header>
        
    )
}
export default HeaderNew;