import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

function Login(){
    const[successMsg,setSuccessMsg]=React.useState('');
    const [LoginData,setLoginData]=React.useState({
        "username":"",
        "password":""
    })
    function handlEvents(event){
        const {name,value}=event.target;
        setLoginData((x)=>{
            return {
                ...x,[name]:value
            }
        })
    }
    function handleLogin(){
        console.log("LoginData-:",LoginData);
        fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(LoginData),
      })
        .then(response => response.json())
        .then(responseData => {// Handle the response from the controller if needed
            
            'name' in responseData?setSuccessMsg("Login Success fully"):setSuccessMsg(responseData.errorMessage)
          console.log('Controller Response--:', responseData.errorMessage);
        })
        .catch(error => {
          console.error('Error sending data to controller:', error);
        });

    
    
    }
// fetch Fun




    return(
        
        <>
        {successMsg==='Login Success fully'?<HomePage/>:
    
        <div className="login-body">
        <div class="login-container">
    <h2>Login</h2>
    <div class="" >
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" onChange={handlEvents} value={LoginData.username} id="username" name="username" required placeholder="Enter Mail id"/>
      </div>
     

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" onChange={handlEvents}  value={LoginData.password} id="password" name="password" required/>
      </div>

      <div class="form-group">
        <button type="submit" onClick={handleLogin}>Login</button>
      </div>
      {successMsg&&(<div>{successMsg}</div>)}
      <h3>New User <Link to={'/register'}>Register</Link></h3>
      
    </div>
  </div>
  </div>
  }
  
  </> )

}
export default Login;