const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]); // Move the first item to the end
  }
  if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // Move the last item to the beginning
  }
}

document.addEventListener('click', activate, false);