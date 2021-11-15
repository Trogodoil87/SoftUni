let main = document.querySelector('main');

let menuElements = document.querySelectorAll('nav a');

let userTabs = document.querySelectorAll('nav div a');

let home = document.querySelector('#home');
let login = userTabs[1];
let register = userTabs[2];
let logout = userTabs[0];

logout.style.display = 'none'


for (const menuElement of menuElements) {
    menuElement.addEventListener('click', (e) => {
        removeActiveButton(menuElements);
        e.currentTarget.classList.add('active');

        let views = document.querySelector('#views');
        let currentView = document.querySelector('main section');
        console.log(e.currentTarget.textContent);
        switch (e.currentTarget.textContent) {
            case 'Home':
                removeSectionFromMainElement(currentView, views);

                main.appendChild(document.querySelector('aside'))
                break;
            case 'Logout':
                removeSectionFromMainElement(currentView, views);

                main.appendChild(document.querySelector('#login-view'))
                break;
            case 'Login':
                removeSectionFromMainElement(currentView, views);

                main.appendChild(document.querySelector('#login-view'))
                break;
            case 'Register':
                removeSectionFromMainElement(currentView, views);

                main.appendChild(document.querySelector('#register-view'));
                registerUser();

                break;
            default:
                break;
        };
    })
}

function registerUser() {
    

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeActiveButton(menuElements) {
    menuElements.forEach(el => {
        el.classList.remove('active');
    })
}

function removeSectionFromMainElement(section, allSections) {
    if (section !== null) {
        allSections.appendChild(section);
    }
}



function afterSuccessfulOperation(viewToAppend, user) {
    removeSectionFromMainElement(document.querySelector('main section'), views);
    main.appendChild(document.querySelector(viewToAppend));
    removeActiveButton(menuElements);

    let activeElement = document.querySelector('#home');
    activeElement.classList.add('active');
    document.querySelector('.email span').textContent = user;
}