function colorize() {
    // TODO
    let evenListItems = document.querySelectorAll('table tr:nth-of-type(2n)');
    for (const col of evenListItems) {
        col.style.backgroundColor = 'teal';
    }
}