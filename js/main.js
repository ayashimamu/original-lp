var target =
  document.querySelector('.header-nav')
var hamburger =
  document.getElementById('hamburger')
hamburger.addEventListener('click',
  function () {
  target.classList.toggle('is-hidden')
})