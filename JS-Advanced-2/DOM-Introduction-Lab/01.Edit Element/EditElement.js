function editElement(textElement, match, replacer) {
    while(textElement.textContent.includes(match)) {
        textElement.textContent = textElement.textContent.replace(match, replacer);
    }
}