// Темна тема
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Модальне вікно через 10 секунд
setTimeout(() => {
  document.getElementById('subscribeModal').style.display = 'block';
}, 10000);

document.querySelector('.close').onclick = () => {
  document.getElementById('subscribeModal').style.display = 'none';
};

// Лічильник користувачів
const counter = document.querySelector('.counter');
const target = +counter.dataset.target;
let count = 0;

const updateCounter = () => {
  if (count < target) {
    count += 15;
    counter.innerText = count;
    setTimeout(updateCounter, 30);
  } else {
    counter.innerText = target;
  }
};

updateCounter();

// Scroll reveal ефект
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
