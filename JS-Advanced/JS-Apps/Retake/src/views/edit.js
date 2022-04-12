import { getDetails, update } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (item, onSubmit) => html`
    <section id="editPage">
        <form @submit=${onSubmit} class="theater-form">
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" value="${item.title}">
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${item.date}">
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author" value="${item.author}">
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea id="description" name="description" placeholder="Description">${item.description}</textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="${item.imageUrl}">
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
`;

export async function editPage(ctx) {
    const item = await getDetails(ctx.params.id);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const date = formData.get('date').trim();
        const author = formData.get('author').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        try {
            if (title == '' && date == '' && author == '' && description == '' && imageUrl == '') {
                throw new Error('Please fill all mandatory fields!');
            }

            await update(ctx.params.id, { title, date, description, author, imageUrl });
            ctx.page.redirect(`/details/${ctx.params.id}`);
        } catch (error) {

        }
    }
}
