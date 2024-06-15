import './styles/counter.css';
import React from 'react';
import Box from './Box';


function Counter(props){
    let boxes=[
        {
            key:1,
            on:true
        },
        {
            key:2,
            on:false
        },{
            key:3,
            on:true
        },
        {
            key:4,
            on:false
        }
        ,
        {
            key:5,
            on:false
        },
        {
            key:6,
            on:true
        }
    ]
   
   
    let [arr,setArr]=React.useState(["Thing 1","Thing 2"]);
   
    function handl(){
        setArr(prevst=>{return [...prevst,`Thing ${prevst.length+1}`]});
    }

  
  
    const sqaureElements=boxes.map(sq=>( 
     <Box on={sq.on}  key={sq.key} />    
    ))
   
    

    let arrthings=arr.map(x=><p key={x}>{x}</p>)
    
    let [counts,setCount]=React.useState(0)

    
 
   function handlClickMinus(){
    setCount(counts--);
   }
   function handlClickPlus(){
    setCount(counts++);
   }
   
  


    return (
        <div>
        <div className="counter">
            <button className="counter-minus" onClick={handlClickMinus} >-</button>
            <div className="counter-count">
                <h1>{counts}</h1>
            </div>

            <button className="counter-plus" onClick={handlClickPlus}>+</button>


        </div>
        <div className='addItems'>
            <button onClick={handl}>Add</button>
            <div className='addss'> <h1>{arrthings}</h1></div>
           

        </div>
        <div className='boxes' >
           {sqaureElements}
        </div>

        </div>
    );
}

export default Counter;