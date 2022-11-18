import { checkAuth } from '../fetch-utils.js';

window.addEventListener('load', async () => {
    checkAuth();
});

const homePageButton = document.getElementById('home-page');
const createPost = document.getElementById('create-post');

homePageButton.addEventListener('click', () => {
    location.replace('/');
});

createPost.addEventListener('submit', async () => {
    const data = new FormData(createPost);
    const newPost = {
        title: data.get('title'),
        message: data.get('message'),
        author: data.get('author'),
    };
    createPost(newPost);
});
