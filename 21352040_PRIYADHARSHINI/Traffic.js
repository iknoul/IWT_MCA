function startTrafficSignal(){
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
    var green=document.getElementById("green");

    green.style.opacity=1;
    setTimeout(function(){
        red.style.opacity=.3;
        yellow.style.opacity=1;
        green.style.opacity=.3;
    },5000);

    setTimeout(function(){
        red.style.opacity=1;
        yellow.style.opacity=.3;
        green.style.opacity=.3;
    },7000);
    setTimeout(function(){
        red.style.opacity=.3;
        yellow.style.opacity=.3;
        green.style.opacity=1;
    },12000);
}
var timer=setInterval(function(){
    startTrafficSignal();
},12000);
startTrafficSignal();