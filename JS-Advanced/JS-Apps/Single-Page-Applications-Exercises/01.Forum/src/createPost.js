export async function createPost(postText, id) {
    fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            postText,
            postId: id
        })
    })
    .then(res => res.json())
    .catch(err => {
        alert(err);
    })
}