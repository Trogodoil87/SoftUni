function solve(...text) {
    let sumLength = 0;

    text.forEach(element => {
        sumLength += element.length;
    });

    console.log(sumLength);
    console.log(Math.floor(sumLength / text.length));
}

solve('chocolate', 'ice cream', 'cake');