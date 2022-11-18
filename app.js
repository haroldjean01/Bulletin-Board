/* Imports */

import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

// import { signUpUser, signInUser } from './fetch-utils.js';

/* Get DOM Elements */
const loginButton = document.getElementById('login-button');
const createButton = document.getElementById('create-button');
const postsList = document.getElementById('posts');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const posts = await getPosts();

    for (let post of posts) {
        const currentPost = await renderPost(post);
        postsList.append(currentPost);
    }
});

loginButton.addEventListener('click', () => {
    location.replace('/login-page');
});

createButton.addEventListener('click', () => {
    location.replace('/create-page');
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
