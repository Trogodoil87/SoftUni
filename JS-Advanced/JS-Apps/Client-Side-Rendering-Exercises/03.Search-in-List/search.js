import { towns as townNames } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.querySelector('#towns');


function townsTemplate(towns) {
   return html`
         <ul>
            ${towns.map(t => html`<li class=${t.match ? 'active' : '' }>${t.name}</li>`)}
         </ul>
         `
}

const towns = townNames.map(t => ({ name: t, match: false }));
let input = document.querySelector('#searchText');
let ouput = document.querySelector('#result');
document.querySelector('article button').addEventListener('click', onSearch);

update();

function update() {
   render(townsTemplate(towns), div);
}

function onSearch(event) {
   const match = input.value.trim().toLocaleLowerCase();
   let matches = 0;

   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) {
         town.match = true;
         matches++;
      } else {
         town.match = false;
      }
   }
   ouput.textContent = `${matches} matches found`;
   update();
}

