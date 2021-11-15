function attachEvents() {
    let posts = document.querySelector('#posts');
    let _postsArr = [];
    let loadPostsBtn = document.querySelector('#btnLoadPosts');
    loadPostsBtn.addEventListener('click', () => {
        loadPostsBtn.disabled = true;
        getPosts();
    });

    document.querySelector('#btnViewPost').addEventListener('click', (e) => {
        viewPosts(e);
    })

    function getPosts() {
        fetch(`http://localhost:3030/jsonstore/blog/posts`)
            .then(res => res.json())
            .then((data) => {
                for (const key in data) {
                    _postsArr.push(data[key]);
                    posts.appendChild(createOptionElement(key, data[key].title));
                }
            })
            .catch(() => {
                throw Error('Error');
            });
    }

    function viewPosts(e) {
        let selectedPost = Array.from(posts.childNodes).find((node) => node.selected);

        fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(res => res.json())
            .then((data) => {
                let comments = allComents(data, selectedPost.value);
                let postTitle = document.querySelector('#post-title');
                let postBody = document.querySelector('#post-body');
                let postComents = document.querySelector('#post-comments');

                clearContent(postComents);
                clearContent(postBody);

                postTitle.textContent = selectedPost.textContent;

                let _index = _postsArr.map((o) => o.title === selectedPost.textContent).indexOf(true);
                let p = document.createElement('p');
                p.textContent = _postsArr[_index].body;
                postBody.appendChild(p);

                for (const comment of comments) {
                    let li = document.createElement('li');
                    li.setAttribute('id', comment.id);
                    li.textContent = comment.text;
                    postComents.appendChild(li);
                }

            })
            .catch(() => {
                throw Error('error');
            })
    }

    function createOptionElement(value, content) {
        let option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = content;
        return option;
    }

    function allComents(object, value) {
        let arr = [];
        for (const key in object) {
            if (object[key].postId === value) {
                arr.push(object[key]);
            }
        }

        return arr;
    }

    function clearContent(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

attachEvents();