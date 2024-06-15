import React from "react";
function Box(props){
    console.log("on status:",props.on)
    const[on,setOn]=React.useState(props.on)
    const styles={
        backgroundColor:on?"#222222":"transparent"
    }
    console.log(styles.backgroundcolor)
    function toggle(){
        setOn(x=>!x)
    }
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    );
}

export default Box;