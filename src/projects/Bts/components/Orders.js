import React from "react";
import '../btproject.css';
import { getApi } from "./Api";
function Orders(){
    const [result,setresult]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState(null)
    
    React.useEffect(()=>{
    async function loadvehicles(){
        setLoading(true)
        
        try{
            const data1=await getApi("http://localhost:8080/order/");
            setresult(data1)
        }
        catch(err){
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
        console.log("iferror:",error)
        return <h2>There Was an Error:{error.message}</h2>
    }
    return (
        <div>
        <div className="orders">
            <table className="table">
                <tr>
                <th >orderId</th>
                <th>customerName</th>
                <th>busNumber</th>
                <th>DriverName</th>
                <th>Village</th>
                <th>Pin Code</th>
                </tr>
                <tbody  className="rows">
                   {
                   result.map((x=>{
                    return <tr>
                        <td>{x.orderId}</td>
                        <td>{x.customerName}</td>
                        <td>{x.orderId}</td>
                        <td>{x.busNumber}</td>
                        <td>{x.adress.village}</td>
                        <td>{x.adress.pinCode}</td>
                    </tr>
                   }))


                   }
                   
                </tbody>
                

            </table>
        </div>
        </div>
    )

}

export default Orders;