const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');


      navLinks.forEach((link, index) => {
              if(link.style.animation){
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
          }
      });

      burger.classList.toggle('toggle');

  });

 
}

navSlide();

// =========================== navbar ends ===========================================



document.querySelector(".carousel-control-prev").onclick = () => plusSlide(-1);
document.querySelector(".carousel-control-next").onclick = () => plusSlide(1);

const slides = document.querySelectorAll(".carousel-item");
const caps = document.querySelectorAll(".cap");

// console.log(slides, caps);

let slideIndex = 1;

function plusSlide(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let time = 1500;

let carouselLoop;

function autoLoopCarousel() {
  carouselLoop = setInterval(() => {
    plusSlide(1);
  }, time * 3);
}

window.onload = () => {
  showSlides(slideIndex);
  autoLoopCarousel();
  capCycle();
  loopCaps();
};

function addClass(element, time) {
  setTimeout(() => {
    element.classList.add("cap-active");
  }, time);
}
function removeClass(element, time) {
  setTimeout(() => {
    element.classList.remove("cap-active");
  }, time);
}

const capCycle = () => {
  addClass(caps[0]);
  removeClass(caps[0], time * 3);
  addClass(caps[1], time * 3);
  removeClass(caps[1], time * 6);
  addClass(caps[2], time * 6);
  removeClass(caps[2], time * 9);
  addClass(caps[3], time * 9);
  removeClass(caps[3], time * 12);
  addClass(caps[4], time * 12);
  removeClass(caps[4], time * 15);
};

let capLoop;
function loopCaps() {
  capLoop = setInterval(capCycle, time * 15);
}

function capSlide(n) {
  showSlides((slideIndex = n));
}