import logo1 from '../Images/react-logo.png';
import { Link } from 'react-router-dom';
function Header() {

    function handleEplore(){
        
    }
    return (
        <header className="header">
            <nav className='nav'>
                <a href="https://youtube.com/" target="blank">
                    <img src={logo1} className="imgpage2"/>
                </a>
                <h2 className="bts">BTS</h2>
                <input placeholder="search here" className="searchbox"></input>
                <ul className="navitems">
                    <li><Link to='/'><button >Home</button></Link></li>
                    <li><button onClick={handleEplore}>Explore</button></li>
                    <li><button >Orders</button></li>
                    <li><button>Account</button></li>
                    <li><button>About</button></li>
                    <li><button>ContactUs</button></li>
                    <li><button>Logout</button></li>
                    <li><button>Register</button></li>
                </ul>

            </nav>
        </header>
    )
}
export default Header;