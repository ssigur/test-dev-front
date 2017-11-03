document.addEventListener('DOMContentLoaded', function() {

  // POI Animations
  var el = document.getElementsByClassName('poi');
  for (var i = 0 ; i < el.length; i++) {
      el[i].addEventListener('click', function () {
          if (this.classList.contains('active')) {
              this.classList.remove('active');
          } else {
              this.classList.add('active');
          }
      });
  }
});
