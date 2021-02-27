function checkAll2() {
  var inputs = document.querySelectorAll('.check2');
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }
}

function uncheckAll2() {
  var inputs = document.querySelectorAll('.check2');
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

window.onload = function() {
  window.addEventListener('load', checkAll2, false);
}
