function solve(input) {
    let students = input;

    let html = '<table>\n';
    html += `\t<tr>${Object.keys(students[0]).map((x) => `<th>${x}</th>`).join('')}</tr>`;
    students.forEach(student => {
        html += `\n\t<tr>`;
        html += Object.values(student).map(x => `<td>${x}</td>`).join('');
        html += `</tr>`;
    });
    html += '\n</table>';

    return html;
}

solve('[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]');