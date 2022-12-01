function validation()
{
    var num=document.getElementById("phone");
    if(num.length!=10)
    {
        alert("Put correct number");
    }
}
function enlist()
{
    var reg=document.getElementById("reg"); 
    var xhttp;
    if (reg == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "", true);
    xhttp.send();
}