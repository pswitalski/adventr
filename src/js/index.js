import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//  dropDown

const dropDown = document.querySelector('.home__form');
const signInButton = document.querySelector('.home__signin');

signInButton.addEventListener('click', () => {
    dropDown.classList.toggle('home__form--active');
})

// mobile nav

const navButton = document.querySelector('.home__menu-open');
const closeButton = document.querySelector('.mobile-nav__close-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

navButton.addEventListener('click', () => {
    mobileNav.classList.add('mobile-nav--active')
})

closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav--active');
})

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('mobile-nav--active');
    })
})

window.addEventListener('resize', () => {
    mobileNav.classList.remove('mobile-nav--active');
})


// animations

gsap.registerPlugin(ScrollTrigger);

gsap.to("#meditation", {
    scrollTrigger: {
        trigger: '#meditation',
        start: "top center"
    },
    opacity: '1',
    scaleX: '1',
    delay: 0.2,
    snap: {
        duration: {
            min: 0.5,
            max: 1
        }
    }
})

gsap.to("#pricing", {
    scrollTrigger: {
        trigger: "#pricing",
        start: "top center"
    },
    opacity: '1',
    scaleX: '1',
    delay: 0.2,
    snap: {
        duration: {
            min: 0.5,
            max: 1
        }
    }
})

gsap.to('.lake', {
    scrollTrigger: {
        trigger: ".lake",
        start: "top bottom-=300px",
    },
    opacity: '1'
})

gsap.to('.links__container', {
    scrollTrigger: {
        trigger: ".links",
        start: "top bottom-=200px",
    },
    opacity: '1',
    scaleY: '1'
})

gsap.to('.footer__links', {
    scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
    },
    opacity: '1',
    scaleY: '1',
    delay: 0.4,
})

gsap.to('.footer__copy', {
    scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
    },
    opacity: '1',
    scaleY: '1',
    delay: 0.6,
})