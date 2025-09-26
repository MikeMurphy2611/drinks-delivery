/**
 * scrolling drinks menu
 */
let drinksContainer = document.querySelector('.drinksContainer');
let scrollingBtns = document.querySelectorAll('.scrollingBtn');
let scrollAmount;

scrollingBtns.forEach((btn, index) => {
  btn.onclick = function() {
    scrollAmount = (index == 0)? -250: 250;
    drinksContainer.scrollBy({left: scrollAmount, behavior: "smooth"});
  }
});

/**
 * display checkout sidebar
 */
let sidebar = document.querySelector('.sidebar');
let cancelBtn = document.querySelector('.cancelBtn');
let cartBtn = document.querySelector('.cartBtn');

cartBtn.onclick = function() {
  sidebar.style.display = 'flex';
}

cancelBtn.onclick = function() {
  sidebar.style.display = 'none';
}