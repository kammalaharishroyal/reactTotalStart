import logo1 from '../Images/react-logo.png';
function Account() {
    return (
        <div className="account">
            <div className="accountinner">

                <div className="profileimg1">
                    <h2>Account Details</h2>
                    <img src={logo1} className="profileimg" /></div>
                <div className="accountdata">
                <h3>Username:Harish kammala</h3>
                <h3>Mobile:9347779216</h3>
                <h3>Email:kammalaharish23@gmail.com</h3>
                <h3>Country:India</h3>
                </div>
            </div>
        </div>

    );
}
export default Account;