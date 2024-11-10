// Menu Bar
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

// Rempve Menu Bar

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
  nav.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


//Home Swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
});

// change header background
const header = document.querySelector('.header')
window.addEventListener('scroll', ()=> {
  if(window.scrollY >=70 ){
    header.classList.add('header-shadow')
  }
  else{
    header.classList.remove('header-shadow')
  }
})

