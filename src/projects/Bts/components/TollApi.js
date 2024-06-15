
function TollApi(){
   

    fetch("JNgtP6G4TPtLmhN46fG7R6LqMfjDLqTR")
    .then((data)=>data.json())
    .then(x=>console.log("toll:",x))
    return (
        <div>
            TollApi
        </div>
    )

}

export default TollApi;