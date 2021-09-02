function encodeAndDecodeMessages() {
    let buttonElements = document.querySelectorAll('#main button');
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', () => {
            if (buttonElement.textContent.includes('Encode')) {
                let textAreaElement = buttonElement.parentElement.querySelector('textarea');
                let encodedText = textAreaElement.value.split('').map((v, i) => v.charCodeAt() + 1).map((v, i) => String.fromCharCode(v)).join('');
                buttonElement.parentElement.parentElement.querySelectorAll('textarea')[1].textContent = encodedText;
                textAreaElement.value = '';
            } else {
                let textAreaElement = buttonElement.parentElement.querySelector('textarea');
                let decodedText = textAreaElement.value.split('').map((v, i) => v.charCodeAt() - 1).map((v, i) => String.fromCharCode(v)).join('');
                textAreaElement.value = decodedText;
            }
        })
    }

}