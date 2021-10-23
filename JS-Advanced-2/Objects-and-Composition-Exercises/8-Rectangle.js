function rectangle(width, height, color) {
    color = color.split('').map((x, i) => i == 0 ? x.toUpperCase() : x).join('');
    let obj = {
        width,
        height,
        color,
        calcArea: () => {
            return width * height;
        }
    };

    return obj;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());