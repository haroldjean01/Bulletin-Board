import { checkAuth } from '../fetch-utils.js';

window.addEventListener('load', async () => {
    checkAuth();
});

const homePageButton = document.getElementById('home-page');

homePageButton.addEventListener('click', () => {
    location.replace('/');
});
