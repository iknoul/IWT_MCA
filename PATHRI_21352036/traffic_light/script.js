const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

function changeLights(){
    setTimeout(() => {
        redLight()
    }, 0);
    setTimeout(() => {
        greenLight()
    }, 5000);
    setTimeout(() => {
        yellowLight()
    }, 10000);
}

function redLight(){
    red.classList.add('active');
    document.getElementById("stop").innerHTML="STOP";
    setTimeout(() => {
        red.classList.remove('active');
        document.getElementById("stop").innerHTML=" ";
    }, 5000);
}
function yellowLight(){
    yellow.classList.add('active');
    document.getElementById("ready").innerHTML="READY";
    setTimeout(() => {
        yellow.classList.remove('active');
        document.getElementById("ready").innerHTML=" ";
    }, 2000);
}
function greenLight(){
    green.classList.add('active');
    document.getElementById("go").innerHTML="GO";
    setTimeout(() => {
        green.classList.remove('active');
        document.getElementById("go").innerHTML=" ";
    }, 5000);
}

setInterval(changeLights,12000)
