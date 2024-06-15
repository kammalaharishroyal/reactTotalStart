export async function getApi(url){
    
    const res=await fetch(url);
    if(!res.ok){
        throw{
            message:"Failed To Fetch Buses",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data=await res.json();
    
    return data;

}
