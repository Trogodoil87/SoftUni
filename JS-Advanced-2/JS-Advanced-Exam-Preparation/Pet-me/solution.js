function solve() {
    // TODO ...
    let allAddFieldElements = document.querySelectorAll('#container input');
    let addButtonElement = document.querySelector('button');
    let adoptedUlElement = document.querySelector('#adopted ul');
    


    let nameFieldElement = allAddFieldElements[0];
    let ageFieldElement = allAddFieldElements[1];
    let kindFieldElement = allAddFieldElements[2];
    let currentOwnerFieldElement = allAddFieldElements[3];

    // nameFieldElement.value = 'pe';
    // ageFieldElement.value = '123';
    // kindFieldElement.value = 'pe';
    // currentOwnerFieldElement.value = 's';


    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (nameFieldElement.value !== '' && ageFieldElement.value !== '' && kindFieldElement.value !== '' && Number(ageFieldElement.value)) {
            createLiElement(nameFieldElement.value, ageFieldElement.value, kindFieldElement.value, currentOwnerFieldElement.value);
            nameFieldElement.value = '';
            ageFieldElement.value = '';
            kindFieldElement.value = '';
            currentOwnerFieldElement.value = '';
        }
    })

    function createLiElement(name, age, kind, currentOwner) {
        let ulElement = document.querySelector('#adoption ul');

        let liElement = document.createElement('li');
        let pElement = document.createElement('p');

        let strongNameElement = appendStrongElement(name);
        let strongAgeElement = appendStrongElement(age);
        let strongKindElement = appendStrongElement(kind);
        pElement.appendChild(strongNameElement);
        pElement.innerHTML += ` is a `;
        pElement.appendChild(strongAgeElement);
        pElement.innerHTML += ` year old `;
        pElement.appendChild(strongKindElement);
        liElement.appendChild(pElement);

        let spanElement = document.createElement('span');
        spanElement.textContent = `Owner: ${currentOwner}`;
        liElement.appendChild(spanElement);

        let buttonElement = document.createElement('button');
        buttonElement.textContent = `Contact with owner`;
        liElement.appendChild(buttonElement);
        buttonElement.addEventListener('click', (e) => {
            contactWithOwner(e);
        })

        ulElement.appendChild(liElement);
    }

    function appendStrongElement(element) {
        let strongElement = document.createElement('STRONG');
        let textNode = document.createTextNode(element);
        strongElement.appendChild(textNode);
        return strongElement;
    }

    function contactWithOwner(event) {
        let liElement = event.currentTarget.parentElement;
        event.currentTarget.remove();

        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        inputElement.setAttribute('placeholder', 'Enter your names');

        let button = document.createElement('button');
        button.textContent = `Yes! I take it!`;
        button.addEventListener('click', (e) => {
            adoptPet(e);
        })

        divElement.appendChild(inputElement);
        divElement.appendChild(button);

        liElement.appendChild(divElement);
    }

    function adoptPet(event) {
        let inputElement = event.currentTarget.parentElement.children[0];

        if (inputElement.value !== '') {
            let liElement = event.currentTarget.parentElement.parentElement;
            console.log(liElement.children);

            liElement.children[2].remove();
            liElement.children[1].textContent = `New Owner: ${inputElement.value}`;

            let button = document.createElement('button');
            button.textContent = 'Checked';
            button.addEventListener('click', () => {
                liElement.remove();
            })

            liElement.appendChild(button);
            adoptedUlElement.appendChild(liElement);
        }
    }
}
