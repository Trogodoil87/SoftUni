function carCrate(input) {
    let students = JSON.parse(input);

    let html = '<table>\n';
    html += `\t<tr>${Object.keys(students[0]).map((x) => `<th>${x.trim()}</th>`).join('')}</tr>`;
    students.forEach(student => {
        html += `\n\t<tr>`;
        html += Object.values(student).map(x => `<td>${x}</td>`).join('');
        html += `</tr>`;
    });
    html += '\n</table>';

    console.log(html);
}
carCrate(`[{"Name":"Pesho", 

"Score":4, 

" Grade":8}, 
{"Name":"Gosho", 

"Score":5, 

" Grade":8}, 

{"Name":"Angel", 

"Score":5.50, 

" Grade":10}]` );