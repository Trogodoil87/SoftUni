function focused() {
    let allSectionElements = document.querySelectorAll('input[type="text"]');

    for (const sectionElement of allSectionElements) {
        sectionElement.addEventListener('focus', (e) => {
          e.currentTarget.parentNode.className = 'focused';
        })
        sectionElement.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.classList.remove('focused');
        })
    }
}