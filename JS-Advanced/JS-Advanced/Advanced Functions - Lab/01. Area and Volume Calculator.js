function result(area, vol, input) {
    let output = [];

    input = JSON.parse(input);
    for (const cordinate of input) {
        let obj = {
            area: area.call(cordinate),
            volume: vol.call(cordinate)
        };

        output.push(obj);
    }   

    return output;
};
function area() {

    return Math.abs(this.x * this.y);

}
function vol() {

    return Math.abs(this.x * this.y * this.z);

}
let actual = result(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
console.log(actual);