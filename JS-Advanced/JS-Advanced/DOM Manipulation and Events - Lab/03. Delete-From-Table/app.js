function deleteByEmail() {
    let allTdElements = document.querySelectorAll('#customers tbody tr');
    let inputTextElement = document.getElementsByTagName('input');
    let resultElement = document.querySelectorAll('#result');

    for (const tdItem of allTdElements) {
        if (tdItem.textContent.includes(inputTextElement[0].value)) {
            tdItem.remove();
            resultElement[0].textContent = 'Deleted.';
        } else {
            resultElement[0].textContent = 'Not found.';
        }
    }
}