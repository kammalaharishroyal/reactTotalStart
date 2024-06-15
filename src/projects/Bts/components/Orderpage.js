function OrderPage() {



    return (
        <div className="order-body">

       

        <section className=".order-section">
            
            <form>
            
                <input type="text" id="customerId" name="customerId" placeholder="CustomerID" required /><br/>
                <input type="text" id="busNumber" name="busNumber"placeholder="Bus Number" required /><br/>                
                <input type="text" id="village" name="village" placeholder="Village"required /><br/>             
                <input type="text" id="mandal" name="mandal"placeholder="Mandal" required /><br/>               
                <input type="text" id="district" name="district"placeholder="District" required /><br/>             
                <input type="text" id="state" name="state" placeholder="State" required /><br/>                
                <input type="text" id="pincode" name="pincode" required  placeholder="Pincode"/><br/>
                <button type="submit" className="order-button">Place Order</button>
            </form>
        </section>

        </div>



    )
}








export default OrderPage;























// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Order Page</title>
//     <style>
        
//     </style>
// </head>

// </html> -->
