
const names=["harish","pavan","vemanarayana"]
function uper1sr(x){
    return x[0].toUpperCase()+x.slice(1);
}
const uname=names.map(uper1sr)
console.log(uname)