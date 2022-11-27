function ToMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 500) {
        clearInterval(id);
      } else {
        pos++;  
        elem.style.left = pos + "px"; 
      }
    }
  }