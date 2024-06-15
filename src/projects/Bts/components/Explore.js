import React from 'react';
import Card from './Card';
import {getApi} from './Api';

function Explore() {
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
   
   
    //    console.log("avils:",getAvailble() )
    if(loading){
        return "Loading..."
    }
    if(error){
        return <h2>There Was an Error:{error.message}</h2>
    }

    return(
        <div>
            
       
        <div className='body'>
       
            <div className='cards'>
                
                {
                    result.map(
                        (data)=>{
                            return <Card key={data.number+data.number*2} mobile={data.number} mail={data.availble} />
                        }
                    )
                }

            </div>
            


        </div>
        </div>



    )
}
    





















    // const c = [
    // { name: 'Harish', mobile: '9347779216', mail: 'harish@gmail.com', prof: { logo1 } ,status:0},
    // { name: 'prasad', mobile: '9611339390', mail: 'prasad@gmail.com', prof: { logo1 } ,status:1},
    // { name: 'Pavan', mobile: '9392885930', mail: 'pavan@gmail.com', prof: { logo1 },status:0 },
    // { name: 'Hari B', mobile: '8096661990', mail: 'harib@gmail.com', prof: { logo1 },status:1 },
    // { name: 'renuka', mobile: '6362988798', mail: 'renuka@gmail.com', prof: { logo1 } ,status:1},
    // { name: 'Narendra', mobile: '9347263005', mail: 'naredra@gmail.com', prof: { logo1 },status:0 },
    // { name: 'Raghava', mobile: '6361522156', mail: 'raghava@gmail.com', prof: { logo1 },status:1 }
    // ];

//     return c.map(x => { return (<Card name={x.name} mobile={x.mobile} mail={x.mail} prof={x.logo1} status={x.status} /> )  });

// }


// function Page2() {
//     return (
//         <div>


//             <body className="body">

//                 <div className="cards">
//                     {c}

//                 </div>

//             </body>





//         </div>



//     );
// }
export default Explore;