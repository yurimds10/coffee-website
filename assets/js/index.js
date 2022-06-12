const navMenu = document.querySelector('.nav');

function navToggle() {
  navMenu.classList.toggle('open-nav');
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('open-nav');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


function showScrollUp() {
  const scrollUp = document.querySelector('.scroll__button');

  if (this.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');

  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', showScrollUp);

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.scrollHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active-link');

    } else {
      document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

scrollReveal.reveal(`.home__content`);
scrollReveal.reveal(`.about__content`);
scrollReveal.reveal(
  `.menu__card,
  .products__card,
  .review__card,
  .blogs__card,
  .contact__form,
  .footer`,
  {interval: 100}
);
