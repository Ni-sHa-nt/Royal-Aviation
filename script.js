
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
})


// locomotive smooth scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });