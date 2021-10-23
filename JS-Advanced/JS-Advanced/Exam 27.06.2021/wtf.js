let fNameFieldElement = document.getElementById('fname');
let emailFieldElement = document.getElementById('email');
let phoneFieldElement = document.getElementById('phone');
let addressFieldElement = document.getElementById('address');
let postalCodeFieldElement = document.getElementById('code');

let submitButtonElement = document.getElementById('submitBTN');
let editButtonElement = document.getElementById('editBTN');
let continueBtnElement = document.getElementById('continueBTN');

let previewUlElement = document.getElementById('infoPreview');

let userInfo = {};
let userName = fNameFieldElement.value;


submitButtonElement.addEventListener('click', (e) => {
  if (!fullNameAndEmailValidation(fNameFieldElement, emailFieldElement)) {
    return;
  }

  userInfo[userName] = {
    name: fNameFieldElement.value,
    email: emailFieldElement.value,
    phone: phoneFieldElement.value,
    address: addressFieldElement.value,
    postal: postalCodeFieldElement.value
  };

  console.log(userInfo[userName]);

  editButtonElement.disabled = false;
  continueBtnElement.disabled = false;
  fNameFieldElement.value = '';
  emailFieldElement.value = '';
  phoneFieldElement.value = '';
  addressFieldElement.value = '';
  postalCodeFieldElement.value = '';

  e.currentTarget.disabled = true;
  let nameLiElemnt = document.createElement('li');
  let emailLiElement = document.createElement('li');
  let phoneLiElement = document.createElement('li');
  let addressLiElement = document.createElement('li');
  let postalLiElement = document.createElement('li');

  nameLiElemnt.textContent = `Full Name: ${userInfo[userName].name}`;
  emailLiElement.textContent = `Email: ${userInfo[userName].email}`;
  phoneLiElement.textContent = `Phone Number: ${userInfo[userName].phone}`;
  addressLiElement.textContent = `Address: ${userInfo[userName].address}`;
  postalLiElement.textContent = `Postal Code: ${userInfo[userName].postal}`;


  previewUlElement.appendChild(nameLiElemnt);
  previewUlElement.appendChild(emailLiElement);
  previewUlElement.appendChild(phoneLiElement);
  previewUlElement.appendChild(addressLiElement);
  previewUlElement.appendChild(postalLiElement);
});


editButtonElement.addEventListener('click', (e) => {
  editButtonElement.disabled = true;
  continueBtnElement.disabled = true;
  submitButtonElement.disabled = false;

  previewUlElement = removeAllChildNodes(previewUlElement);

  fNameFieldElement.value = userInfo[userName].name;
  emailFieldElement.value = userInfo[userName].email;
  phoneFieldElement.value = userInfo[userName].phone;
  addressFieldElement.value = userInfo[userName].address;
  postalCodeFieldElement.value = userInfo[userName].postal;

  return;
});
continueBtnElement.addEventListener('click', (e) => {
  let blockElement = document.getElementById('block');
  let reservationHeadingElement = document.createElement('h3');

  reservationHeadingElement.textContent = `Thank you for your reservation!`;

  blockElement = removeAllChildNodes(blockElement);

  blockElement.appendChild(reservationHeadingElement);
});

function fullNameAndEmailValidation(nameElement, emailElement) {
  let name = nameElement.value;
  let email = emailElement.value;

  if (name !== '' && email !== '') {
    return true;
  }

  return false;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return parent;
}