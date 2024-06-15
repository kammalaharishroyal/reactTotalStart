
import '../btproject.css'
import React from 'react';
import BusCompo from './BusCompo';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getApi } from './Api';
export function loader(){
    const url="http://localhost:8080/bus/";
    return getApi(url);
}
function BusesLayout(){
    // const [result,setresult]=React.useState([])
    // const [loading,setLoading]=React.useState(false)
    // const [error,setError]=React.useState(null)
    const result=useLoaderData();
    
    // console.log("loade:",loaderdata)
    // console.log("resilt:",result)
    // React.useEffect(()=>{
    // async function loadvehicles(){
    //     const url="http://localhost:8080/bus/";
    //     setLoading(true)
        
    //     try{
    //         const data1=await getApi(url);
    //         setresult(data1)
    //     }
    //     catch(err){
    //         console.log("error:",err)
    //        setError(err)
    //     }
    //     finally{
    //         setLoading(false)
    //     }

    // }
    // loadvehicles();
    // },[])
    // if(loading){
    //     return "Loading..."
    // }
    // if(!error){
    //     return <h2>There Was an Error:{error.messege}</h2>
    // }
  
    return(
        <>
        <div>
         
        <nav className="bts-layout-nav">
       
        <div className='buses-list-body'>
       
            <div className='buses-list-cards' >
                
                {
                    result.map(
                        (data)=>{
                            return  <Link to={`${data.number}`} ><BusCompo mobile={data.number} mail={data.availble} /></Link>
                        }
                    )
                }

            </div>
            

           
        </div>
       
        </nav>
        </div>
        <Outlet/>
        </>
    )
}
export default BusesLayout;