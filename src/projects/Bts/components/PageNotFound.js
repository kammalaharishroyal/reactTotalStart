import { Link } from "react-router-dom";

function PageNotFound(){
    return(
        <>
        <h1>Sorry,The Page You are looking for is Not Found</h1>
        <Link to={'/'}>Return To Home</Link>
        </>
    )
}
export default PageNotFound;