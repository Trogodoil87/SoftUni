function validate() {
    let regexPattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

    let emailFiledElement = document.querySelector('#email');
    
    emailFiledElement.addEventListener('change', (e) => {
        if (regexPattern.test(e.currentTarget.value)) {
           e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.className = 'error';
        }
    })
}