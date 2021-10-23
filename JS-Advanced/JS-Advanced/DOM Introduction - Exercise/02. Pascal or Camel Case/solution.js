function solve() {
  let textElement = document.querySelector('#text');
  let convectionElement = document.querySelector('#naming-convention')

  let text = textElement.value.toLowerCase();
  let convection = convectionElement.value;

  let result = 'Error!';

  if (convection === 'Camel Case') {
    result = toUpperCase(text, 1);
  } else if (convection === 'Pascal Case') {
    result = toUpperCase(text, 0);
  }

  let resultElement = document.querySelector('#result');
  resultElement.textContent = result;

  function toUpperCase(input, index) {
    let text = input.slice().split(' ');

    for (let i = index; i < text.length; i++) {
      let currentWord = text[i].split('');
      currentWord[0] = currentWord[0].toUpperCase();

      text[i] = currentWord.join('');
    }

    return text.join('');
  }
}