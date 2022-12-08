const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyAwfkNr422Oyzt5jNg9yoWlGzFQ-ya3tNJmHbGsxhOAlsv5qtfaUqN_0UL1ikwnwF-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
