import Header from "./components/Header";

import Explore from './components/Explore';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Register from './components/Register';
import Account from './components/Account';
function Bts(){
    return(
        <div>
        <Header/>
        <Explore/>
        <Register/>
        <Contact/>
        <About/>
        <Account/>
        <Footer/>
        </div>
      
    );
}
export default Bts;