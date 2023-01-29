const btn = document.getElementById('btn');
btn.addEventListener('click', activate);
function activate() {
  btn.classList.toggle('active');
}