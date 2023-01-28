const btn = document.getElementById('btn');
const carrusel = document.getElementsByClassName('.slider__btn');
btn.addEventListener('click', activate);

function activate() {
  btn.classList.toggle('active');
  carrusel.style.display = "none"
}