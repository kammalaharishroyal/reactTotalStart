import { NavLink, Outlet } from "react-router-dom";
import '../btproject.css'

function BtsLayout(){
    const activeStyles={
        fontWeight:"bold",
        textDecoration:"underline",
        color:"red"
    }
    return(
        <>
        <nav className="bts-layout-nav">
            <NavLink end style={({isActive})=>isActive?activeStyles:null} to={'.'}>Dashboard</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyles:null} to={'income'}>Income</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyles:null} to={'reviews'}>Reviews</NavLink>
            <NavLink style={({isActive})=>isActive?activeStyles:null} to={'buses'}>Buses</NavLink>
        </nav>
      
        <Outlet/>
        </>
    )
}
export default BtsLayout;