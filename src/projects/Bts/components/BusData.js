import { useParams } from "react-router-dom";
function BusData(){
    const params=useParams();
    return(
        <div>
            <h1>Data About Bus Number:{params.busid}</h1>
        </div>
    )


}
export default BusData;