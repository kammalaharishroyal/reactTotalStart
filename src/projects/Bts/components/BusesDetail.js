import '../btproject.css';
import { Link, Outlet, useParams } from 'react-router-dom';
function BusesDetail() {
    const params = useParams();
    return (
        <>
        <Link to={'..'} relative='path'><h3>Go Back</h3></Link>
        <div className="bus-detail-body">
           
        

            <div class="beautiful-div">
                <div class="title">
                {params.busid}
                </div>
                <div class="content">
                    This is a beautiful Bus. Feel free to customize it to your liking.
                </div>
                <nav>
                    <Link to={'.'}>Details</Link>
                    <Link to={'pricing'}>Pricing</Link>
                    <Link to={'photos'}>Photos</Link>
                </nav>
                <Outlet/>
            </div>
            
        </div>
      
        </>
    )
}
export default BusesDetail;