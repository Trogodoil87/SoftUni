function solve() {
  let textAreaElement = document.querySelector('#input');
  let outputElement = document.querySelector('#output');

  let splitedText = textAreaElement.value.split('.').filter((x) => x !== '').map((x) => x + '.');

  let pargparhRoof = Math.ceil(splitedText.length / 3);

  for (let i = 0; i < pargparhRoof; i++) {
    let currentPargraph = document.createElement('p');
    currentPargraph.textContent = splitedText.splice(0, 3).join('');
    outputElement.appendChild(currentPargraph);    
  }

}