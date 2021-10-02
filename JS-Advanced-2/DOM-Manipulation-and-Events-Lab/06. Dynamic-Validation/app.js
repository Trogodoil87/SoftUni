function validate() {
    let textInputElement = document.querySelector('#email');
    textInputElement.addEventListener('change', (e) => {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        if (pattern.test(e.target.value)) {
            console.log('valid');
            e.target.classList.remove('error');
        } else {
            e.target.className = 'error';
        }
    })
}