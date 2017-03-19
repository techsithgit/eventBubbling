
var onLoadFunction = function() {

  /*****
  Using fromCapture=true uses event Capture phase to execute the
  event. fromCapture=false uses event Bubbling phase to execute the
  event.
  *****/
  var fromCapture = true;

  var p = document.querySelector('#parent');

  p.addEventListener('click', function() {
    console.log('parent clicked');
  }, fromCapture);

  var c = document.querySelector('#child');

  c.addEventListener('click', function() {
    console.log('clild clicked');
  }, fromCapture);
}
