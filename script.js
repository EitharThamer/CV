// زر الوضع الليلي
const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});
