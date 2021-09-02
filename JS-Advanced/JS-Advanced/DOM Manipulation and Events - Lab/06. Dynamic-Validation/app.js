function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', (e) => {
        let regexPattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        if (regexPattern.test(e.target.value)) {
            console.log('valid');
            e.target.classList.remove('error');
            return;
        } else {
            e.target.className = 'error';
        }
    })
}