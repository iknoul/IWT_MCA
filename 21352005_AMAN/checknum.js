var num
function getnum()
{
    num=document.getElementById("num").value;

    if(isNaN(num))
    {
        document.write(num + " is not a number")
    }
    else{
        document.write(num + " is a Number.")
    }
}

