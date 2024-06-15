import React from "react";
import { Link } from "react-router-dom";
function CustomerRegister() {
    const[successMsg,setSuccessMsg]=React.useState('');
    const [formData, setFormdata] = React.useState(
        {
        
            "name": "",
            "number": "",
            "email": "",
            "password": "",
            "adress": {
                
                "village": "kpl",
                "mandal": "nlc",
                "district": "atp",
                "state": "ap",
                "pinCode": "515571"
            }
        }
    )
   
    

    function handleEvents(event) {
        const { name, value} = event.target
        setFormdata(prevdata => {

            return {
                ...prevdata, [name]: value
            }
        })
    }
    function RegisterCustomer(){
       
        
    fetch('http://localhost:8080/customer/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(responseData => {
          // Handle the response from the controller if needed
          if('errorMessage'in responseData){
            setSuccessMsg(responseData.errorMessage);

          }
          else if('Pattern' in responseData){
            setSuccessMsg(responseData.Pattern);
          }
          else if('Email' in responseData){
            setSuccessMsg(responseData.Email);
          }
          else if('NotBlank' in responseData){
            setSuccessMsg(responseData.NotBlank)
          }
          else{
            setSuccessMsg("successfully registered");

          }
          
          
          console.log('Controller Response:', responseData);
        })
        .catch(error => {
          console.error('Error sending data to controller:', error);
        });

    }







    return (
        <div className="register">
            
            <div className="registerinner">
                <div >
                    <ol className="registerol">
                        <h1>Register</h1>
                        <li><input placeholder="name" onChange={handleEvents} name="name" value={formData.name} /></li>
                        <li><input placeholder="number" onChange={handleEvents} name="number" value={formData.number} /></li>
                        <li><input placeholder="email" onChange={handleEvents} name="email" value={formData.email} /></li>
                        <li><input placeholder="password" onChange={handleEvents} name="password" value={formData.password} /></li>
                       
                        <button className="submitbutton" onClick={RegisterCustomer}>Register</button>
                    </ol>
                </div>
               
               {successMsg&&(<div>{successMsg} </div>)}
               <Link to={'/login'}>Login</Link>
               

               

                  
            </div>


        </div >
    );
}
export default CustomerRegister;