let nav;
let count = 0;
let names = ["ハージク・アリ","حاذق علي"];

function nameFunc() {
  if (nav) {
    console.log('Changing name to:', names[count]);
    nav.textContent = names[count];
    count++;

    // reset count if it exceeds the array length
    if (count >= names.length) {
      count = 0;
    }

    // call again after 5 seconds
    setTimeout(nameFunc, 5000);
  } else {
    console.log('nav element not found');
  }
}

// Toggle navigation menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('hidden');
}

// Close menu when clicking a link
function closeMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.add('hidden');
}

// Wait for DOM to load before starting
document.addEventListener("DOMContentLoaded", function() {
  nav = document.getElementById("nav-bar");
  console.log('DOM loaded, nav element:', nav);
  if (nav) {
    nameFunc();
  }

  // Add event listener to menu button
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  // Add event listeners to nav links to close menu
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
