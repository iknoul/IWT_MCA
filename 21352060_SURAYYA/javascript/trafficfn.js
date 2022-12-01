function startSignal()
{
    var g=document.getElementById("green");
    var y=document.getElementById("yellow");
    var r=document.getElementById("red");
    var go=document.getElementById("go");
    var hand=document.getElementById("hand");
    var stop=document.getElementById("stop");
    g.style.opacity=1;
    go.style.color=green;
   // hand.style.visibility=hidden;
    setTimeout(function ()
    {
        g.style.opacity=0.2;
        r.style.opacity=0.2;
        y.style.opacity=1;
        
       // hand.style.visibility=visibile;

    },5000);
    setTimeout(function ()
    {
        g.style.opacity=0.2;
        r.style.opacity=1;
        y.style.opacity=0.2;

    },7000);
    setTimeout(function ()
    {
        g.style.opacity=1;
        r.style.opacity=0.2;
        y.style.opacity=0.2;
        go.style.color=white;
        

    },12000);
    
}
var timer=setInterval(function ()
{
    startSignal();
},12000);
startSignal();