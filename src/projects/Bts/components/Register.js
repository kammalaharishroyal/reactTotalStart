import React from "react";
function Register() {
    const [formData, setFormdata] = React.useState(
        {
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            isFriendly: true,
            userType: "",
            favColor: "",
            dob: ""
        }
    )
    console.log("frind status:", formData.isFriendly)

    function handleEvents(event) {
        const { name, value, type, checked } = event.target
        setFormdata(prevdata => {

            return {
                ...prevdata, [name]: type === "checkbox" ? checked : value
            }
        })
    }







    return (
        <div className="register">
            <div className="registerinner">
                <form action="http://localhost:8080/bus/" method="post">
                    <ol className="registerol">
                        <h1>Register</h1>
                        <li><input placeholder="FirstName" onChange={handleEvents} name="firstName" value={formData.firstName} /></li>
                        <li><input placeholder="LastName" onChange={handleEvents} name="lastName" value={formData.lastName} /></li>
                        <li><input placeholder="Mobike" onChange={handleEvents} name="mobile" value={formData.mobile} /></li>
                        <li><input placeholder="Email" onChange={handleEvents} name="email" value={formData.email} /></li>
                        <li><label>DOB:</label><input type="date" onChange={handleEvents} value={formData.dob} name="dob" /></li>
                        <input type="checkbox" id="isfriendly" name="isFriendly" onChange={handleEvents} checked={formData.isFriendly} /><label htmlFor="isfriendly" > isFriendly</label><br />
                        <button className="submitbutton" type="submit" >Register</button>
                    </ol>

                    <fieldset>
                        <legend>Type</legend>
                        <input type="radio" id="customer" onChange={handleEvents} name="userType" value="Customer" /><label htmlFor="customer">customer</label><br />

                        <input type="radio" id="driver" onChange={handleEvents} name="userType" value="Driver" /><label htmlFor="driver">Driver</label>
                    </fieldset>
                    <label htmlFor="favcolor">What is you favourite color</label>
                    <select id="favcolor" onClick={handleEvents} value={handleEvents.favColor} name="favColor">
                        <option >--Choose--</option>
                        <option value="white" >White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="orange" >orange</option>
                    </select>
                </form>

               

                  
            </div>


        </div >
    );
}
export default Register;