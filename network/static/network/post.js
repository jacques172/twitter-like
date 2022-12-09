document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#post-message').onkeyup = function () {
    document.querySelector('#post-chars-remaining-message').innerHTML = `<b>${this.maxLength - this.value.length}</b> characters remaining`;
  }
});
