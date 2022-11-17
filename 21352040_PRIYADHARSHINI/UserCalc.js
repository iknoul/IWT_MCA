function Addition(){
    // Selecting the input element and get its value 
    const inputVal1 = document.getElementById("myInput1").value;
    const inputVal2 = document.getElementById("myInput2").value;
    const add = inputVal1+inputVal2;
    // Displaying the value
    alert(add);
}
function Subtraction(){
    // Selecting the input element and get its value 
    var inputVal1 = document.getElementById("myInput1").value;
    var inputVal2 = document.getElementById("myInput2").value;
    //var sub = inputVal1-inputVal2;
    total.innerHTML=parseInt(inputVal1.innerHTML)+parseInt(inputVal2.innerHTML);
    // Displaying the value
    //alert(sub);
}

function Multiplication(){
    // Selecting the input element and get its value 
    var inputVal1 = document.getElementById("myInput1").value;
    var inputVal2 = document.getElementById("myInput2").value;
    var mul = inputVal1*inputVal2;
    // Displaying the value
    alert(mul);
}

function Division(){
    // Selecting the input element and get its value 
    var inputVal1 = document.getElementById("myInput1").value;
    var inputVal2 = document.getElementById("myInput2").value;
    var divi = inputVal1/inputVal2;
    // Displaying the value
    alert(divi);
}