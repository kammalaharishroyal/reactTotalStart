import '../btproject.css'
import React from 'react';
import BusCompo from './BusCompo';
import { Link, Outlet} from 'react-router-dom';
import { getApi } from './Api';

function BusesListComponent() {
    const [result,setresult]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState(null)
   
    
    React.useEffect(()=>{
    async function loadvehicles(){
        const url="http://localhost:8080/bus/";
        setLoading(true)
        
        try{
            const data1=await getApi(url);
            setresult(data1)
        }
        catch(err){
            console.log("error:",err)
           setError(err)
        }
        finally{
            setLoading(false)
        }

    }
    loadvehicles();
    },[])
    if(loading){
        return "Loading..."
    }
    if(error){
        return <h2>There Was an Error:{error.messege}</h2>
    }
  
    return(
        <>
        <div>
            
       
        <div className='buses-list-body'>
       
            <div className='buses-list-cards'>
                
                {
                    result.map(
                        (data)=>{
                            return  <Link to={`${data.number}`} ><BusCompo mobile={data.number} mail={data.availble} /></Link>
                        }
                    )
                }

            </div>
            

           
        </div>
        <Outlet/>
        </div>
      

        </>

    )
}
 





export default BusesListComponent;