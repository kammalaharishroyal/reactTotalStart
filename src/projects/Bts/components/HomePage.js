
function HomePage(){
    return(

        <section className="home-page-section">
        <h2>Find the perfect vehicle for your journey</h2>
   
        <form>
            
            <input className="home-page-input" type="text" id="boardingPoint" placeholder="Boarding Point" name="boardingPoint" required/>
            <input className="home-page-input" type="text" id="droppingPoint" placeholder="Dropping Point" name="droppingPoint" required/>
            <input className="home-page-input" type="date" id="travelDate" name="travelDate" required/>
            <input type="submit" value="Search Vehicles" className="home-page-button"/>
        </form>
    </section>

    )
}
export default HomePage;