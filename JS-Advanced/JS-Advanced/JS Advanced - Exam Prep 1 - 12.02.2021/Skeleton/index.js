function solve() {
    let buttonElement = document.querySelector('.action button');
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureElement = document.querySelector('.action input[name="lecture-name"]');
        let dateElement = document.querySelector('input[name="lecture-date"]');
        let moduleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureElement.value || !dateElement.value || moduleElement.value == 'Select module') {
            return;
        }
        let h4 = document.createElement('h4');
        h4.textContent = lectureElement.value;
        let validDate = '';

        let regexPattern = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<mintues>[0-9]{2})/gm;
        let match = regexPattern.exec(dateElement.value);
        if (match) {
            validDate += match.groups.year + '-' + match.groups.month + '-' + match.groups.day + ' ' + match.groups.hour + ':' + match.groups.mintues;
        }

        h4.textContent += ` - ${validDate}`;
        let modulesElement = document.querySelector('.modules');
        let allDivElements = document.querySelectorAll('.modules .module');


        let button = document.createElement('button');
        button.classList.add('red');
        button.textContent = 'Del';
        button.addEventListener('click', deleteSection);

        let li = document.createElement('li');
        li.classList.add('flex');
        li.appendChild(h4);
        li.appendChild(button);

        let ul = document.createElement('ul');
        ul.appendChild(li);
        let h3 = document.createElement('h3');
        h3.textContent = moduleElement.value.toUpperCase() + '-' + 'MODULE';

        for (const currentDivElement of allDivElements) {
            let currentDivH3ElementName = currentDivElement.querySelector('h3');

            if (currentDivH3ElementName.textContent === lectureElement.value) {
                currentDivElement.appendChild(ul);
                return;
            }
        }
        let div = document.createElement('div');
        div.classList.add('module');
        div.appendChild(h3);
        div.appendChild(ul);

        modulesElement.appendChild(div);
    })

    function deleteSection(e) {
        let moduleLength = e.currentTarget.parentNode.parentNode.parentNode.querySelectorAll('ul').length;
        if (moduleLength === 1) {
            e.currentTarget.parentNode.parentNode.parentNode.remove();
            return;
        }
        e.currentTarget.parentNode.parentNode.remove();

    }
};