import { checkAuth, createPost } from '../fetch-utils.js';

window.addEventListener('load', async () => {
    await checkAuth();
});

const homePageButton = document.getElementById('home-page');
const form = document.getElementById('create-post');

homePageButton.addEventListener('click', () => {
    location.replace('/');
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        message: data.get('message'),
        author: data.get('author'),
    };
    const response = await createPost(newPost);
});
