window.addEventListener('load', solve);

function solve() {
    allInputFields = document.querySelectorAll('input');
    let button = document.querySelector('button');
    let tbodyElement = document.querySelector('#furniture-list');

    let totalProfit = 0;


    let modelInputElement = allInputFields[0];
    let yearInputElement = allInputFields[1];
    let priceInputElement = allInputFields[2];
    let descriptionElement = document.querySelector('#description');
    let priceValue = Number(priceInputElement.value);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (modelInputElement.value !== ''
            && yearInputElement.value !== ''
            && descriptionElement.value !== ''
            && priceInputElement.value !== ''
            && Number(priceInputElement.value) >= 0
            && Number(yearInputElement.value) >= 0) {

            let trElement = document.createElement('tr');
            trElement.appendChild(createTd(modelInputElement.value));
            trElement.appendChild(createTd(yearInputElement.value));

            let moreBtnElement = createButton('moreBtn', 'More Info');
            moreBtnElement.addEventListener('click', (e) => {

                actions(e);
            })
            let tdElement = document.createElement('td');


            let buyBtnElement = createButton('buyBtn', 'Buy it');
            buyBtnElement.addEventListener('click', (e) => {
                actions(e);
            })

            tdElement.appendChild(moreBtnElement);
            tdElement.appendChild(buyBtnElement);

            trElement.appendChild(tdElement);

            tbodyElement.appendChild(trElement);
        }
    });

    function createTd(name) {
        let tdElement = document.createElement('td');
        tdElement.textContent = name;
        return tdElement;
    }

    function createButton(_class, _content) {
        let button = document.createElement('button');
        button.textContent = _content;
        button.classList.add(_class);
        return button;
    }

    function actions(e) {

        if (e.currentTarget.textContent === 'More Info') {
            e.currentTarget.textContent = 'Less info';

            let trElement = document.createElement('tr');
            trElement.setAttribute('class', 'hide');

            trElement.setAttribute('style', 'display: contents');
            trElement.appendChild(createTd(`Year: ${yearInputElement.value}`));

            let tdElement = createTd(`Description: ${descriptionElement.value}`);
            tdElement.setAttribute('colspan', '3');
            trElement.appendChild(tdElement);


            tbodyElement.appendChild(trElement);

        } else if (e.currentTarget.textContent === 'Buy it') {
            let totalPriceElement = document.querySelector('.total-price');
            totalProfit += priceValue;
            totalPriceElement.textContent = totalProfit;
        } else if (e.currentTarget.textContent === 'Less info') {
            e.currentTarget.textContent = 'More Info'
            let trElements = e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll('.hide');

            for (const trElement of trElements) {
                if (trElement.getAttribute('style').includes('contents')) {
                    trElement.setAttribute('style', 'display: none');
                }
            }
            // trElement.setAttribute('style', 'display: none');
        }
    }
}
