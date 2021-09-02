function extractText() {
    // TODO
    let allLiElements = document.querySelectorAll(`#items li`);
    let textAreaElement = document.querySelector(`#result`);
    let result = '';
    

    for (const liElement of allLiElements) {
        result += liElement.textContent.trim() + '\n';
    }
    
    textAreaElement.value = result.trim();
}