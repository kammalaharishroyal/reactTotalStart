import '../Diceroll/StyleDice.css';
import Die from './Die';
import React from 'react';

function Home() {
    const [arraydice, setArraydice] = React.useState(allNewDice());
    const [Tenzies, setTenzies] = React.useState(false);
    React.useEffect(
        ()=>{
            const allHeld=arraydice.every(die=>die.isHeld)
            const firstvalue=arraydice[0].value
            const allsamevalue=arraydice.every(die=>die.value===firstvalue)
            if(allHeld&&allsamevalue){ setTenzies(true)}
           

        },[arraydice]
    )

    function allNewDice() {
        let nD = [];
        for (let i = 0; i < 10; i++) {
            const a = {
                value: Math.ceil((Math.random() * 6)),
                isHeld: false,
                id: i
            }
            nD.push(a)
        }
        return nD;
    }

    function holdDie(id) {
       
       setArraydice(oldDie=>oldDie.map(die=>{
        return die.id===id?{...die,isHeld:!die.isHeld}:die})
        )
    }


    function roll(event) {
        const es=event.target.textContent
        if(es==="NewGame"){setArraydice(allNewDice);
            setTenzies(false)}
        else{
        setArraydice((oldvalues)=>oldvalues.map(
            (x)=>{
                return x.isHeld?x:{...x,value:Math.ceil((Math.random() * 6))}
            }
        )

        )}
    }
    console.log(Tenzies);
    const arraydiceEelements = arraydice.map((x) => <Die key1={x.id} value={x.value} isHeld={x.isHeld} holdDie={() => holdDie(x.id)} />)
    return (
        <main >
            <h1>Tenzies</h1>
            <h2 className='title-par'>Roll Until all dices are same</h2>
            <div className="dice-container">
                {arraydiceEelements}
            </div>
            <button className="roll" onClick={roll}>{
            Tenzies?"NewGame":"Roll"}</button>




        </main>


    )
}
export default Home;