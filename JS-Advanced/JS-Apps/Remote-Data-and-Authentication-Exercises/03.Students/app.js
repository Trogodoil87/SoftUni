let data = new FormData(document.querySelector('#form'));
let results = document.querySelector('#results tbody');

let allStudents = [];

let url = `http://localhost:3030/jsonstore/collections/students`;

let firstName = data.get('firstName');
let lastName = data.get('lastName');
let facultyNumber = data.get('facultyNumber');
let grade = data.get('grade');



fetch(url)
    .then(res => res.json())
    .then(data => {
        for (const key in data) {
            allStudents.push(data[key]);
        }

        for (const studentjObj of allStudents) {
            createStudentTd(studentjObj);
        }

    })
    .catch(err => {
        console.error(err);
    });

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();


    if (firstName !== ''
        && lastName !== ''
        && facultyNumber !== ''
        && grade !== ''
        && typeof firstName === 'string'
        && typeof lastName === 'string'
        && Number(facultyNumber)
        && Number(grade)) {

        onClick(firstName, lastName, facultyNumber, grade);
    }
});


function onClick(firstName, lastName, facultyNumber, grade) {

    fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber: Number(facultyNumber),
            grade: Number(grade)
        })
    })
        .then(res => res.json())
        .then(data => {
            allStudents.push(data);

            createStudentTd(allStudents[allStudents.length - 1]);

            document.querySelectorAll('.inputs input').forEach(ele => {
                ele.value = '';
            });
        })
        .catch(err => {
            console.error(err);
        });


}

function createTd(content) {
    let td = document.createElement('td');
    td.textContent = content;
    return td;
}

function createStudentTd(studentObj) {
    let tr = document.createElement('tr');

    tr.appendChild(createTd(studentObj.firstName));
    tr.appendChild(createTd(studentObj.lastName));
    tr.appendChild(createTd(studentObj.facultyNumber));
    tr.appendChild(createTd(studentObj.grade));
    results.appendChild(tr);
}