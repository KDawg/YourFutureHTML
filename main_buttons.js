
function ready(fn) {
  if (document.readyState != 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}


ready(function onReady() {
  var btnOrdinary = document.getElementById('btn-ordinary');
  var btnAccept = document.querySelector('#btn-accept');

  var spanHold1 = document.querySelector('#action-bar-1');
  var spanHold2 = document.querySelector('#action-bar-2');


  btnOrdinary.addEventListener('click', function(e) {
    alert('much ordinary');
    spanHold1.style.display = 'inherit';
  });

  btnAccept.addEventListener('clicked', function(e) {
    alert('button tickled the page [' + JSON.stringify(e.detail) + ']');
    spanHold2.style.display = 'inherit';
  });

});
