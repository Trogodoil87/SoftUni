import { deleteAlbum, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (item, onClick, isOwner) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${item.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${item.name}</h1>
                <h3>Artist: ${item.artist}</h3>
                <h4>Genre: ${item.genre}</h4>
                <h4>Price: $${item.price}</h4>
                <h4>Date: ${item.releaseDate}</h4>
                <p>Description: ${item.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner ? html`
            <div class="actionBtn">
                <a href="/edit/${item._id}" class="edit">Edit</a>
                <a @click=${onClick} href="javascript:void(0)" class="remove">Delete</a>
            </div>
            ` : null}
        </div>
    </div>
</section>
`;


export async function detailsPage(ctx) {
    const item = await loadItem(ctx.params.id);
    const userData = getUserData();

    const isOwner = userData.id == item._ownerId;

    ctx.render(detailsTemplate(item, onClick, isOwner));

    async function loadItem(id) {
        const item = await getById(id);

        return item;
    }

    async function onClick(event) {
        const choice = confirm('Are you sure you want to delete this album?');

        if (choice) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}

