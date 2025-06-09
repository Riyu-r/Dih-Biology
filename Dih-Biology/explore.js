const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');
let current = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function activate(e) {
  if (e.target.matches('.next')) {
    current = (current + 1) % items.length;
  }
  if (e.target.matches('.prev')) {
    current = (current - 1 + items.length) % items.length;
  }
  showItem(current);
}

prevBtn.addEventListener('click', activate);
nextBtn.addEventListener('click', activate);

// Optional: swipe support
let startX = 0;
document.querySelector('.slider').addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.querySelector('.slider').addEventListener('touchend', e => {
  let dx = e.changedTouches[0].clientX - startX;
  if (dx > 50) prevBtn.click();
  else if (dx < -50) nextBtn.click();
});

// Initialize
showItem(current);