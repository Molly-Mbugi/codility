function trank(str,maxlength){
if(str.length>maxlength)
    return str.slice(0,maxlength)
else return str
}
console.log(trank("subscribe to molly",9));
