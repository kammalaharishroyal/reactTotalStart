




import React, { useState } from 'react';
function Reg(props){
    console.log("props:",props.formdata)
    const [data, setData] = useState( {
        
        "name": "harish",
        "number": "9347079216",
        "email": "harishk@gmail.com",
        "password": "Harish3304@",
        "adress": {
            
            "village": "kpl",
            "mandal": "nlc",
            "district": "atp",
            "state": "ap",
            "pinCode": "515571"
        }
    });





  

        fetch('http://localhost:8080/customer/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(responseData => {
            // Handle the response from the controller if needed
            console.log('Controller Response:', responseData);
          })
          .catch(error => {
            console.error('Error sending data to controller:', error);
          });








}
export default Reg

// const YourComponent = () => {
 


//   };

//   return (
//     <div>
//       {/* Your form or other components */}
//       <button onClick={sendDataToController}>Send Data to Controller</button>
//     </div>
//   );
// };

// export default YourComponent;
