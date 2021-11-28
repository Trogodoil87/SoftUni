
const section = document.querySelector('#home-section');
section.remove();

export async function showHomePage(ctx) {
    ctx.updateNav();
    ctx.showSection(section);
}


