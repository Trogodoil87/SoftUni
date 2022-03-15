import { login } from '../api/api.js';
import { html } from '../lib.js';

const LoginTemplate = (onSubmit) => html`
    <section id="loginaPage">
        <form @submit="${onSubmit}" class="loginForm">
            <h2>Login</h2>
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Login</button>
    
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
`;

export function loginPage(ctx) {
    ctx.render(LoginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            if (email == '' || password == '') {
                throw new Error('Please fell all mandatory fields!');
            }

            await login(email, password);
            ctx.updateUserNav();
            ctx.page.redirect('/home');
        } catch (err) {
            alert(err.message);
        }
    }
}
