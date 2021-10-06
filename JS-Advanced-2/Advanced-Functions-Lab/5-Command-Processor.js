function solution() {
    let str = '';

    function append(text) {
        str += text;
        return str;
    }

    function removeStart(count) {
        str = str.split('').filter((x, i) => i > count - 1).join('');
    }

    function removeEnd(count) {
        str = str.split('').reverse().filter((x, i) => i > count - 1).reverse().join('');
    }

    function print() {
        console.log(str);
    }


    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

let firstZeroTest = solution();

firstZeroTest.append('123');

firstZeroTest.append('45');

firstZeroTest.removeStart(2);

firstZeroTest.removeEnd(1);

firstZeroTest.print();