function validate() {

    let checkboxElement = document.querySelector('#company');
    let companyToggleElement = document.querySelector('#companyInfo');

    checkboxElement.addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            companyToggleElement.style.display = 'block';
        } else {
            companyToggleElement.style.display = 'none';

        }
    });


    let isValid = true;

    let submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let allInputElements = Array.from(e.currentTarget.parentNode.querySelectorAll('div input')).filter((x, i) => i < 5);

        for (const inputElement of allInputElements) {
            let fieldName = inputElement.parentNode.querySelector('label').textContent;
            let value = inputElement.value;

            switch (fieldName) {
                case 'Userame:':
                    let userPattern = /^[A-Za-z0-9]{3,20}$/gm;
                    if (userPattern.test(value)) {
                        inputElement.style.border = 'none';
                    } else {
                        inputElement.style.borderColor = 'red';
                        isValid = false;
                    }
                    break;
                case 'Email:':
                    let emailPattern = /^[\w]+@[\w]+\.[\w]+$/gm;

                    if (emailPattern.test(value)) {
                        inputElement.style.border = 'none';
                    } else {
                        inputElement.style.borderColor = 'red';

                        isValid = false;

                    }
                    break;
                case 'Password:':
                    let passPattern = /^[\w]{5,15}$/gm;
                    let cPasswordElement = allInputElements[3];

                    if (passPattern.test(value)) {
                        inputElement.style.border = 'none';
                        cPasswordElement.style.border = 'none';

                    } else {
                        inputElement.style.borderColor = 'red';
                        cPasswordElement.style.borderColor = 'red';

                        isValid = false;
                    }
                    break;
                case 'Confirm Password:':
                    let passwordElement = allInputElements[2];

                    if (passwordElement.value == value) {
                        inputElement.style.border = 'none';
                        passwordElement.style.border = 'none';
                    } else {
                        inputElement.style.borderColor = 'red';
                        passwordElement.style.borderColor = 'red';
                        isValid = false;
                    }
                    break;
                case 'Is Company?':
                    if (checkboxElement.checked) {
                        let companyNumberInputElement = document.querySelector('#companyNumber');
                        if (Number(companyNumberInputElement.value) >= 1000 && Number(companyNumberInputElement.value) <= 9999) {
                            companyNumberInputElement.style.border = 'none';
                        } else {
                            companyNumberInputElement.style.borderColor = 'red';

                            isValid = false;
                        }
                    }
                    break;
            }
        }

        let validElement = document.querySelector('#valid');

        if (isValid) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    });

}

