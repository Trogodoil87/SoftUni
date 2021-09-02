function lockedProfile() {
    let buttonElements = document.querySelectorAll('.profile button');
    let profileElements = document.querySelectorAll('.profile');

    for (let index = 0; index < buttonElements.length; index++) {
        buttonElements[index].addEventListener('click', () => {
            let currentButtonElement = document.querySelector(`input[name="user${index + 1}Locked"]:checked`);

            if (currentButtonElement.value === 'unlock') {
                let hiddenTextElement = document.getElementById(`user${index + 1}HiddenFields`);
                hiddenTextElement.style.display = hiddenTextElement.style.display === 'block'
                    ? 'none'
                    : 'block';
                buttonElements[index].textContent = buttonElements[index].textContent === 'Show more'
                    ? 'Hide it'
                    : 'Show more';
            }
        })
    }
}