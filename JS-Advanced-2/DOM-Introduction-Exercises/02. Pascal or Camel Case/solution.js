function solve() {
  let textElement = document.querySelector('#text');
  let caseElemnt = document.querySelector('#naming-convention');

  let caseConvention = caseElemnt.value;

  let resultElement = document.querySelector('#result');

  switch (caseConvention) {
    case 'Camel Case':
      resultElement.textContent = transfromsText(textElement.value.toLowerCase().split(' '), 'Camel');
      break;

    case 'Pascal Case':
      resultElement.textContent = transfromsText(textElement.value.toLowerCase().split(' '), 'Pascal');

      break;
    default:
      resultElement.textContent = 'Error!';
      break;
  }



  function transfromsText(textArr, conventionCase) {
    let result = [];

    for (let i = 0; i < textArr.length; i++) {
      if (conventionCase == 'Camel' && i === 0) {
        result.push(textArr[0]);
      } else {
        let currentWord = textArr[i].split('');
        result.push(currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length).join(''));
      }

    }

    return result.join('');
  }
}