/* Imports */

import { signUpUser, signInUser } from './fetch-utils.js';

/* Get DOM Elements */
const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

/* State */

/* Events */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/other-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/other-page');
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
