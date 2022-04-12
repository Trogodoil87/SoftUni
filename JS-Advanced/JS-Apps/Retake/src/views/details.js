import { del, getDetails } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (item, isOwner, onDelete, onLike) => html`
   <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${item.title}</h1>
                    <div>
                        <img src=${item.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${item.description}</p>
                    <h4>Date: ${item.date}</h4>
                    <h4>Author: ${item.author}</h4>
                    <div class="buttons">
                        ${isOwner 
                        ? html` <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${item._id}">Edit</a>` 
                        : null}
                       <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>
                    </div>
                    <p class="likes">Likes: 0</p>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const item = await loadDetails();

    const userData = getUserData();
    const isOwner = userData.id == item._ownerId;

    ctx.render(detailsTemplate(item, isOwner, onDelete));

    async function loadDetails() {
        const item = await getDetails(ctx.params.id);

        return item;
    }

    async function onDelete() {
        try {
            const choice = confirm('Are you sure you want to delete?');

            if (choice) {
                del(item._id);
                ctx.page.redirect('/profile');
            }
        } catch (err) {
            alert(err.message);
        }
    }
}
