const btn = document.getElementByID('btn');
const nav = document.getElementByID('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
});
