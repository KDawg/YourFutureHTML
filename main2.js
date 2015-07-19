
function ready(fn) {
  if (document.readyState != 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}


ready(function onReady() {
  var list = document.querySelector('#the-list');

  list.addEventListener('tvlisting:clicked', function(e) {
    alert('tv-listing published a message [' + JSON.stringify(e.detail) + ']');
  });
});
