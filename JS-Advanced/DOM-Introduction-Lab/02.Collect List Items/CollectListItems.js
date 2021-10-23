function extractText() {
    let allListItems = document.querySelectorAll('#items li');
    let textarea = document.getElementById('result');
    let result = '';

    for (const liElement of allListItems) {
       result += liElement.textContent.trim() + '\n';
    }
    
    textarea.value = result.trim();
}