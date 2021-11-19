import { showView } from "./dom.js";


export async function viewTopic(id) {
    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            showView(createTopicView(data));
         
        })
        .catch(err => {
            alert(err);
        })
}

function createTopicView(topic) {
    let element = document.createElement('div')
    element.className = 'container';
    element.innerHTML = `
    <div class="container">
    <!-- theme content  -->
    <div class="theme-content">
        <!-- theme-title  -->
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${topic.topicName}</h2>

                </div>

            </div>
        </div>
        <!-- comment  -->

        <div class="comment">
        <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
            dolorem quam,
            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
            nostrum facilis ipsum dolorem deserunt illum?</p>
    </div>


    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                <div class="post-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                        dolorem quam.</p>
                </div>
            </div>
        </div>
    </div>
        </div>

        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form>
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>

    </div>
</div>`
    return element;
}