function add()
{
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    sum = num1 + num2;
    document.getElementById("answer").value = sum;
}
function sub()
{
    var num1,num2,sub;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    sub = num1-num2;
    document.getElementById("answer").value = sub;
}
function mul()
{
    var num1,num2,sub;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    mul = num1*num2;
    document.getElementById("answer").value = mul;
}
function div()
{
    var num1,num2,sub;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    div = num1/num2;
    document.getElementById("answer").value = div;
}