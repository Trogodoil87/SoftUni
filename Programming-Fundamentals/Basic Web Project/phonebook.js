/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const Contact = require('./models/Contact');

let contacts = [];

function getAll() {
	return contacts.slice();
}

function addContact(name, number) {
	let index = isExist(name, contacts);
	if (index >= 0) {
		if (!contacts[index].numbers.includes(number)) {
			contacts[index].numbers.push(number);
		}
	} else {
		let contact = new Contact(name);
		contact.numbers.push(number);
		contacts.push(contact);
	}
}

function deleteContact(name) {
	let index = isExist(name, contacts);

	if (index >= 0) {
		contacts.splice(index, 1);
	}
}

function editNumber(number) {

}

function editUser(user) {

}

function isExist(name, contacts) {
	let index = -1;

	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].name === name) {
			index = i;
			break;
		}
	}

	return index;
}

module.exports = {
	getAll,
	addContact,
	deleteContact,
	editNumber,
	editUser
};