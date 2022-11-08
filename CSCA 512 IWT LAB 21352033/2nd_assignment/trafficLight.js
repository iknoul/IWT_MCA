var lights = document.querySelectorAll('#isiqfor > div'),
  timers = [5000, 2000, 7000],
  counter = 0;

window.addEventListener('load', start);

var start = setTimeout(function() {
  traffic();
}, 5000);

function traffic() {
  for (i = 0; i < lights.length; i++) {
    lights[i].classList.remove('on');
  }
  lights[counter].classList.add('on');
  setTimeout(traffic, timers[counter]);
  counter = (counter + 1) % timers.length;
}
