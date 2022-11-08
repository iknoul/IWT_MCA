const res=document.getElementById("result");
console.log("Hello");

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  }

  function liveScreen(enteredValue) {
    if (!res.value) {
      res.value = "";
    }
    res.value += enteredValue;
  }
  

  document.addEventListener("keydown", keyboardInputHandler);
  
  function keyboardInputHandler(e) {

    e.preventDefault();

    if (e.key === "0") {
      res.value += "0";
    } else if (e.key === "1") {
      res.value += "1";
    } else if (e.key === "2") {
      res.value += "2";
    } else if (e.key === "3") {
      res.value += "3";
    } else if (e.key === "4") {
      res.value += "4";
    } else if (e.key === "5") {
      res.value += "5";
    } else if (e.key === "6") {
      res.value += "6";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "8") {
      res.value += "8";
    } else if (e.key === "9") {
      res.value += "9";
    }
  
    //operators
    if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }
  
  
    //press enter to see result
    if (e.key === "Enter") {
      calculate(result.value);
    }
  
    //backspace for removing the last input
    if (e.key === "del") {
      const resultInput = res.value;
      //remove the last element in the string
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }