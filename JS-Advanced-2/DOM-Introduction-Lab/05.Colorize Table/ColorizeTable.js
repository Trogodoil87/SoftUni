function colorize() {
    let evenListItems = document.querySelectorAll('tr:nth-of-type(2n)');
    
    for (const col of evenListItems) {
        col.style.backgroundColor = 'teal';
    }
}