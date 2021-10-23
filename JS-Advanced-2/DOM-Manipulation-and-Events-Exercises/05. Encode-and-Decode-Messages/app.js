function encodeAndDecodeMessages() {
    let buttonElements = document.querySelectorAll('button');
    let textAreaElements = document.querySelectorAll('textarea');

    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', (e) => {


            if (e.currentTarget.textContent.includes('Encode')) {
                let encodedMsg = textAreaElements[0].value.split('').map((v) => v.charCodeAt() + 1).map((v) => String.fromCharCode(v)).join('');
                textAreaElements[1].value = encodedMsg;
                textAreaElements[0].value = '';
            } else {
                let decodedMsg = textAreaElements[1].value.split('').map((v) => v.charCodeAt() - 1).map((v) => String.fromCharCode(v)).join('');
                textAreaElements[1].value = decodedMsg;
            }
        })
    }
}