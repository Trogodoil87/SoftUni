function solve() {
  let textArea = document.querySelectorAll('#exercise textarea');
  let generateButtonElement = document.querySelectorAll('#exercise button');
  let rowElements = document.querySelector('.table tbody')

  console.log(generateButtonElement[1]);
  generateButtonElement[0].addEventListener('click', () => {
    let furnitures = JSON.parse(textArea[0].value);

    for (const furniture of furnitures) {
      let imgTd = document.createElement('td');
      let image = document.createElement('img');
      image.src = furniture.img;
      imgTd.appendChild(image);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = furniture.name;
      nameTd.appendChild(nameP);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = furniture.price;
      priceTd.appendChild(priceP);

      let decFactorTd = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = furniture.decFactor;
      decFactorTd.appendChild(decFactorP);

      let buttonTd = document.createElement('td');
      let button = document.createElement('input');
      let type = document.createAttribute('type');
      type.value = 'checkbox';
      button.setAttributeNode(type);
      buttonTd.appendChild(button);

      let tr = document.createElement('tr');

      tr.appendChild(imgTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decFactorTd);
      tr.appendChild(buttonTd);

      rowElements.appendChild(tr);
    }

  });
  let boughtFurniture = [];
  let totalPrice = 0;
  let totalFactorUnit = 0;

  generateButtonElement[1].addEventListener('click', () => {
    let markedElements = document.querySelectorAll('.table tbody tr td input[type="checkbox"]:checked');

    for (const element of markedElements) {
      let name = element.parentElement.parentElement.children[1].textContent;
      boughtFurniture.push(name);
      let price = Number(element.parentElement.parentElement.children[2].textContent);
      totalPrice += price;
      let decFactor = Number(element.parentElement.parentElement.children[3].textContent);
      totalFactorUnit += decFactor;
    }
    let totalDecFactor = totalFactorUnit / boughtFurniture.length;

    textArea[1].value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    textArea[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textArea[1].value += `Average decoration factor: ${totalDecFactor}`
  });
}