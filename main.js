
function ready(fn) {
  if (document.readyState != 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}


ready(function onReady() {
  var btn = document.querySelector('#btn-accept');
  var btnOrdinary = document.getElementById('btn-ordinary');


  btn.addEventListener('clicked', function(e) {
    alert('button tickled the page [' + JSON.stringify(e.detail) + ']');
  });

  btnOrdinary.addEventListener('click', function(e) {
    alert('much ordinary');
  });
});
