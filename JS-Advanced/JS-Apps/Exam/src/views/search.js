import { search } from "../api/data.js";
import { html, until } from "../lib.js";

const searchTemplate = (item, onClick) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click="${onClick}" class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        ${item.length > 0
             ? html` <div class="card-box">
             <img src="${item.imgUrl}">
                 <div>
                <div class="text-center">
                    <p class="name">Name: ${item.name}</p>
                    <p class="artist">Artist: ${item.artist}</p>
                    <p class="genre">Genre: ${item.genre}</p>
                    <p class="price">Price: $${item.price}</p>
                    <p class="date">Release ${item.date}</p>
                </div>
                <div class="btn-group">
                    <a href="/details" id="details">Details</a>
                </div>
            </div>
        </div>`
         : html` <p class="no-result">No result.</p>`}
        <!--If have matches-->


        <!--If there are no matches-->

    </div>
</section>
`;


export function searchPage(ctx) {
    console.log(ctx);
    ctx.render(searchTemplate(onClick));

    async function onClick(event) {
        event.preventDefault();
        const searchValue = document.querySelector('#search-input').value.trim();

        if (searchValue) {
            const item = await search(searchValue);
            return item;
        }

    }
}