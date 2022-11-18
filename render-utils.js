export async function renderPost(post) {
    const postEl = document.createElement('div');

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postMessage = document.createElement('p');
    postMessage.textContent = post.message;

    const postAuthor = document.createElement('p');
    postAuthor.textContent = post.author;

    postEl.append(postTitle, postMessage, postAuthor);
    return postEl;
}
