var name1=document.getElementById("name1");
var paswrd=document.getElementById("pswrd");
document.write("LOGIN PAGE");
function loginCheck()
{
    if(name1=="surayya")
{
    if(paswrd=="surayya1")
    {
        alert("Successfully logged in");
    }
    else
    {
        alert("Incorrect password");
    }
}
else{
    alert("Incorrect username");
}

}
