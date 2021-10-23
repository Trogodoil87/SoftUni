function extract(content) {
    let textContentElement = document.getElementById('content');

    let result = '';

    while (textContentElement.textContent.includes('(')) {
        let startIndex = textContentElement.textContent.indexOf('(');
        let endIndex = textContentElement.textContent.indexOf(')');

        let spliced = textContentElement.textContent.split('').slice(startIndex + 1, endIndex).join('');
        textContentElement.textContent = textContentElement.textContent.split('').slice(endIndex + 1).join('');
        result += spliced +'; ';
    }
    return result;
}