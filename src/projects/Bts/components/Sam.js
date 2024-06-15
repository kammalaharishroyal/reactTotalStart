import React from 'react';
function Sam() {
  const url="http://localhost:8080/bus/";
  const [data,setData]=React.useState([])

  const fetchinfo=()=>{
    return fetch(url)
          .then((res)=>res.json())
          .then((d)=>setData(d))
  }
 React.useEffect(()=>{
  fetchinfo();
 },[]);
 console.log("dat",data.length)
  
 return (
  <div className="App">
    <h1 style={{ color: "green" ,marginLeft:"400px"} }>using JavaScript inbuilt FETCH API</h1>
    <h2>Number</h2>
    <center>
      {data.map((dataObj, index) => {
        return (
          
          <div
            style={{
              width: "15em",
              backgroundColor: "#35D841",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
          >
            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.number}</p>
          </div>
        );
      })}
    </center>
  </div>
);


}
export default Sam;