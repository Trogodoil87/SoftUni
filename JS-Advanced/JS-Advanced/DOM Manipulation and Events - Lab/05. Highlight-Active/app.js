function focused() {
    let allInputElements = document.querySelectorAll('input');

    for (const sectionItem of allInputElements) {
        sectionItem.addEventListener('focus', (e) => {
            e.target.parentElement.className = 'focused';
        });
        sectionItem.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        })
    }

}