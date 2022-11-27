let email = document.getElementById("input-field").value;
let reg = new RegExp('[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}');
function validate() {
    if(reg.test(email)) {
        alert("Email is valid!");
    }
    else{
        alert("Email is not valid!");
    }
}