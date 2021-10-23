function solve() {
  let buttonElements = document.querySelectorAll('button');
  let furnitures = [];
  let totalPrice = 0;
  let avgDecFactor = [];

  for (const buttonElement of buttonElements) {
    buttonElement.addEventListener('click', (e) => {
      let jsonTextAreaElement = e.currentTarget.parentElement.children[1];
      console.log(jsonTextAreaElement.value);

      if (e.currentTarget.textContent == 'Generate') {
        let arr = Array.from(JSON.parse(jsonTextAreaElement.value));

        for (const obj of arr) {

          let trElement = document.createElement('tr');

          let imgElement = document.createElement('img');
          imgElement.setAttribute('src', obj.img);
          let imgTdElement = document.createElement('td');
          imgTdElement.appendChild(imgElement);

          let namePElement = document.createElement('p');
          namePElement.textContent = obj.name;
          let nameTdElement = document.createElement('td');
          nameTdElement.appendChild(namePElement);

          let pricePElement = document.createElement('p');
          pricePElement.textContent = obj.price;
          let priceTdElement = document.createElement('td');
          priceTdElement.appendChild(pricePElement);

          let decFactorPElement = document.createElement('p');
          decFactorPElement.textContent = obj.decFactor;
          let decFactorTdElement = document.createElement('td');
          decFactorTdElement.appendChild(decFactorPElement);

          let inputElement = document.createElement('input');
          inputElement.setAttribute('type', 'checkbox');
          let inputTdElement = document.createElement('td');
          inputTdElement.appendChild(inputElement);

          trElement.appendChild(imgTdElement);
          trElement.appendChild(nameTdElement);
          trElement.appendChild(priceTdElement);
          trElement.appendChild(decFactorTdElement);
          trElement.appendChild(inputTdElement);

          let tBodyElement = document.querySelector('tbody');
          tBodyElement.appendChild(trElement);
        }

      } else {
        let trElements = e.currentTarget.parentElement.children[3].querySelectorAll('tr:nth-of-type(1n+2)');
        for (const trElement of trElements) {
          let checkboxElement = trElement.children[4].children[0]
          if (checkboxElement.checked === true) {
            let [name, price, factor] = Array.from(trElement.children).splice(1, 3).map((v) => v.textContent).map((v, i) => i > 0 ? Number(v) : v);

            furnitures.push(name);
            totalPrice += price;
            avgDecFactor.push(factor);
          }

        }

        let resultTextAreaElement = e.currentTarget.parentElement.children[4];
        resultTextAreaElement.textContent += `Bought furniture: ${furnitures.join(', ')}\n`;
        resultTextAreaElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        resultTextAreaElement.textContent += `Average decoration factor: ${avgDecFactor.reduce((acc, v) => (acc + v) / avgDecFactor.length)}`
        e.currentTarget.disabled = true;
      }
    })
  }
}