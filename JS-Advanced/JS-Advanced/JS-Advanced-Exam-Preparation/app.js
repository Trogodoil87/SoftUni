window.addEventListener('load', solve());

function solve() {
    allInputFields = document.querySelectorAll('input');
    let button = document.querySelector('button');


    let modelInputElement = allInputFields[0];
    let yearInputElement = allInputFields[1];
    let priceInputElement = allInputFields[2];

    if (modelInputElement.value !== ''
        && yearInputElement.value !== ''
        && priceInputElement.value !== ''
        && Number(priceInputElement.value)
        && Number(yearInputElement)) {
            console.log('clicked')
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
    })
}
