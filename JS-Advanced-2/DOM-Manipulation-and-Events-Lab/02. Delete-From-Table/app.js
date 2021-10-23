function deleteByEmail() {
    let allTdElemnts = document.querySelectorAll('#customers tbody tr');
    let inputTextElement = document.querySelector('input');
    let resultElement = document.querySelector('#result');

    for (const tdElement of allTdElemnts) {
        if (tdElement.children[1].textContent.includes(inputTextElement.value)) {
            resultElement.textContent = 'Deleted.';
            tdElement.remove();
        }
    }

    if (resultElement.textContent !== 'Deleted.') {
        resultElement.textContent = 'Not found.'
    }
    
}