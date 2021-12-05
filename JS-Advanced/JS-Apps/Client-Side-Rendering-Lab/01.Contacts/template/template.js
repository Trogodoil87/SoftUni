import { html } from '../lib/lib.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

export function contactTemplate(data, onDetails) {
    const result = html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn" @click=${()=> onDetails(data)}>Details</button>
                <div class="details" id=${data.id} style=${styleMap({display: data.details ? 'block' : 'none'})}>
                    <p>Phone number: ${data.phoneNumber}</p>
                    <p>Email: ${data.email}</p>
                </div>
            </div>
        </div>`

    return result;
}



