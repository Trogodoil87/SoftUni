function lockedProfile() {
    let showMoreButtonElements = document.querySelectorAll('button');
    let statusButtonElements = document.querySelectorAll('[type="radio"]');

    for (const showMoreButton of showMoreButtonElements) {
        showMoreButton.addEventListener('click', (e) => {

            let unlockElement = e.currentTarget.parentNode.children[4];
            let userHiddenInfoElement = e.currentTarget.parentNode.children[9]

            console.log(userHiddenInfoElement);
            if (e.currentTarget.textContent === 'Show more') {
                if (unlockElement.checked === true) {
                    userHiddenInfoElement.style.display = 'initial';
                    e.currentTarget.textContent = 'Hide it';
                }

            } else {
                if (unlockElement.checked === true) {
                    userHiddenInfoElement.style.display = 'none';
                    e.currentTarget.textContent = 'Show more';
                }
            }

        })
    }
}