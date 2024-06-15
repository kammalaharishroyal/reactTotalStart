import Header from "./components/Header";
import Body from "./components/Body";
import './dark.css';
import React from 'react';

function DarkLight(){
    const [them,setThem]=React.useState(true);

    function handleDark(){
        setThem((x)=>{
            return !x;

        })

    }
    let styles={
        backgroundColor:"white"

    }
    
    
    return (
        <div>
        <div className="darklight">
            <button onClick={handleDark}>Dark</button>
           <h1>Harish</h1>
           <h1>Harish</h1>
           <h1>Harish</h1>
        </div>
        </div>
    )
}
export default DarkLight;