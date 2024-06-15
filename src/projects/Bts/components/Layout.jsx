import { Outlet } from "react-router-dom"
import HeaderNew from "./HeaderNew"
export default function Layout(){
    return(
        <>
        
        <HeaderNew/>
       
        <Outlet/>

        </>
    )
}