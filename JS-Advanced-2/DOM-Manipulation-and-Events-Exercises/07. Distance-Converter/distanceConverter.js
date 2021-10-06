function attachEventsListeners() {
    function calculate(type, operator, selectedInput) {
        let distance = 0;
        if (operator === '*') {
            switch (type) {
                case 'km':
                    distance = selectedInput * 1000;
                    break;
                case 'm':
                    distance = selectedInput * 1;
                    break;
                case 'cm':
                    distance = selectedInput * 0.01;
                    break;
                case 'mm':
                    distance = selectedInput * 0.001;
                    break;
                case 'mi':
                    distance = selectedInput * 1609.34;
                    break;
                case 'yrd':
                    distance = selectedInput * 0.9144;
                    break;
                case 'ft':
                    distance = selectedInput * 0.3048;
                    break;
                case 'in':
                    distance = selectedInput * 0.0254;
                    break;
                default:
                    break;
            }
            return distance;
        } else if (operator === '/') {
            switch (type) {
                case 'km':
                    distance = selectedInput / 1000;
                    break;
                case 'm':
                    distance = selectedInput / 1;
                    break;
                case 'cm':
                    distance = selectedInput / 0.01;
                    break;
                case 'mm':
                    distance = selectedInput / 0.001;
                    break;
                case 'mi':
                    distance = selectedInput / 1609.34;
                    break;
                case 'yrd':
                    distance = selectedInput / 0.9144;
                    break;
                case 'ft':
                    distance = selectedInput / 0.3048;
                    break;
                case 'in':
                    distance = selectedInput / 0.0254;
                    break;
                default:
                    break;
            }
            return distance;
        }
    }
    let inputUnitElement = document.querySelector('#inputUnits');
    let outputUnitElement = document.querySelector('#outputUnits');

    let inputFieldElement = document.querySelector('#inputDistance');
    let outputFieldElement = document.querySelector('#outputDistance');

    let convertButtonElement = document.querySelector('#convert');

    convertButtonElement.addEventListener('click', (e) => {
        let selectedInput = inputUnitElement.value;
        let selectedOutput = outputUnitElement.value;

        let inputValue = calculate(selectedInput, '*', inputFieldElement.value);
        let output = calculate(selectedOutput, '/', inputValue);

        console.log(inputValue);
        console.log(output)

        outputFieldElement.disabled = false;
        outputFieldElement.value = output;
    })

}