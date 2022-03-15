import { getAll } from "../api/data.js";
import { html, until } from "../lib.js";
import { getUserData } from "../util.js";

const catalogTemplate = (dataPromise, missing) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${until(dataPromise, html`<p>Loading</p>`)}

    <!--No albums in catalog-->
    ${missing ? html`<p>No Albums in Catalog!</p>` : null}

</section>`;

const catalogCard = (item, isLoged) => html`
<div class="card-box">
    <img src=${item.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${item.name}</p>
            <p class="artist">Artist: ${item.artist}</p>
            <p class="genre">Genre: ${item.genre}</p>
            <p class="price">Price: ${item.price}</p>
            <p class="date">Release Date: ${item.date}</p>
        </div>
        ${isLoged ? html`
        <div class="btn-group">
            <a href="/details/${item._id}" id="details">Details</a>
        </div>
        ` : ''}
    </div>
</div>`;

export function catalogPage(ctx) {
    ctx.render(catalogTemplate(loadItems(), false));

}

async function loadItems() {
    let loged = false;
    const userData = getUserData();

    if (userData) {
        loged = true;
    }
    const items = await getAll();

    return items.map((i) => catalogCard(i, loged));
}
