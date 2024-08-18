const menuIcon = document.getElementById('menuIcon');
const sideNavbar = document.querySelector('.side-navbar');
const closeBtn = document.querySelector('.close-btn');

menuIcon.addEventListener('click', () => {
    sideNavbar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sideNavbar.classList.remove('open');
});
