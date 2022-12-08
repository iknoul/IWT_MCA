function clearAll(){

    document.getElementById('result').value = '';

}
function display(val){
document.getElementById('result').value+=val;
return val;
}

function solve(){

    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y;

    return y;

}
function back(){
var value=document.getElementById('result').value;
document.getElementById('result').value=value.substr(0,value.length - 1);
}
