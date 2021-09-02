function toggle() {
    let buttonElement = document.querySelector('.button');
    let pElement = document.querySelector('#extra');

    if (pElement.style.display === '' || pElement.style.display === 'none') {
        buttonElement.textContent = 'Less';
        pElement.style.display = 'block';
    } else {
        pElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}   