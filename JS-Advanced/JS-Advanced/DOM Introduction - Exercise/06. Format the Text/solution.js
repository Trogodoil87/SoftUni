function solve() {
  let textAreaElement = document.querySelector('#input');

  let paragraph = textAreaElement.value.split('.').filter((x) => x !== '').map((x) => x + '.');

  let pRoof = Math.ceil(paragraph.length / 3);

  let outputAreaElement = document.querySelector('#output');

  for (let i = 0; i < pRoof; i++) {
    outputAreaElement.innerHTML += `<p>${paragraph.splice(0, 3)}</p>`;
  }
}