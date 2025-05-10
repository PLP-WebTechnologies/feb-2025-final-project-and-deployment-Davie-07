// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav ul');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close the menu when a link is clicked
mainNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        mainNav.classList.remove('active');
    }
});