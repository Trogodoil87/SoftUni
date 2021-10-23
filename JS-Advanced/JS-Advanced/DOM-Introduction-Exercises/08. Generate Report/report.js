function generateReport() {
    let checkBoxElements = document.querySelectorAll('[type=checkbox]');
    let infoElements = document.querySelectorAll('tbody tr');
    let outputElement = document.querySelector('#output');

    let indexes = [];

    let output = [];

    for (let i = 0; i < checkBoxElements.length; i++) {
        if (checkBoxElements[i].checked) {
            indexes.push(i);
        }
    }

    for (let row = 0; row < infoElements.length; row++) {
        let currentRow = infoElements[row].childNodes;
        currentRow = Array.from(currentRow).filter((v, i) => i % 2 === 1);
        let obj = {};

        for (let col = 0; col < currentRow.length; col++) {
            if (indexes.includes(col)) {
                
                let checkBoxName = checkBoxElements[col].name;
                let currentRowData = currentRow[col].textContent;
                obj[checkBoxName] = currentRowData;
            }   
        }

        // console.log(obj);
        output.push(obj);
    }

    outputElement.value = JSON.stringify(output);
}