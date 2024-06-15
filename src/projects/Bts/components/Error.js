import { useRouteError } from "react-router-dom"



export default function Error(){
    const error=useRouteError()
    console.log("errr:",error)
    return (
        <>
        <h1>Error:{error.message}</h1>
        
        </>
    )
}