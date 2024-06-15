// import '../Diceroll/StyleDice.css';
function Die(props){

    const styles={
        backgroundColor: props.isHeld?"#59E391":"#f5f5f5"
    }   
    return(
        <div className="die-face" style={styles}   onClick={props.holdDie}>
          
            <h2 className="die-num"  key1={props.key1}>{props.value} </h2>
        </div>
    )
}
export default Die;