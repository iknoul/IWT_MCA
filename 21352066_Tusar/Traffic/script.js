function startSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
 
    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.2;
        red.style.opacity=.2;
        yellow.style.opacity=1;
    },5000);
 
    setTimeout(function () {
        green.style.opacity=.2;
        red.style.opacity=1;
        yellow.style.opacity=.2;
    },7000);
 
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.2;
        yellow.style.opacity=.2;
    },12000);
}
 
var timer=setInterval(function () {
    startSignal();
},12000);
 
startSignal();