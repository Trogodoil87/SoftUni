function toggle() {
    let buttonElement = document.querySelector('.button');
    let toggleElement = document.querySelector('#extra');

    if (buttonElement.textContent == 'More') {
        buttonElement.textContent = 'Less';
        toggleElement.style.display = 'block';
    } else if (buttonElement.textContent == 'Less') {
        buttonElement.textContent = 'More';
        toggleElement.style.display = 'none';
    }
}