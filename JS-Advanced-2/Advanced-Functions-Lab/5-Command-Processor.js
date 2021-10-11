function solution() {
    let str = '';
    let result = {
        append,
        removeStart,
        removeEnd,
        print
    };

    return result;

    function append(text) {
        str += text;
        return result;

    }

    function removeStart(count) {
        str = str.split('').filter((x, i) => i > count - 1).join('');
        return result;

    }

    function removeEnd(count) {
        str = str.split('').reverse().filter((x, i) => i > count - 1).reverse().join('');
        return result;

    }

    function print() {
        console.log(str);
        return result;
    }

}

let firstZeroTest = solution();

firstZeroTest.append('123').append('45').removeStart(2).removeEnd(1).print();
