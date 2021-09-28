const dropDown = document.querySelector('.home__form');
const signInButton = document.querySelector('.home__signin');

signInButton.addEventListener('click', () => {
    dropDown.classList.toggle('home__form--active');
})