import '../btproject.css'
function BusCompo(props) {
    
    return (
        
        <div className="card2">
            {props.status===0&&<div>Available</div>}
            <div className='card2img'>
                
                <img src='https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1024' />
                <h4>{props.name}</h4>
            </div>
            <div className="phem">
               <h2>RayalseemaExpress</h2>
               <h2>$1000/day</h2>
            

                
            </div>


        </div>



    )
}
export default BusCompo;