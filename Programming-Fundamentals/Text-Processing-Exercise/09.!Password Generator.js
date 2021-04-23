function solve(input) {
    let firstWord = input[0];
    let secondWord = input[1];
    let changeWord = input[2];

    let firstPass = {
        pass: ''
    };

    let secondPass = {
        pass: ''
    };

    firstPass = wolvesAdding(firstWord, changeWord, -1);
    secondPass = wolvesAdding(secondWord, changeWord, firstPass.count);

    let output = firstPass.text + secondPass.text;

    console.log(`Your generated password is ${output.split('').reverse().join('')}`);

    function wolvesAdding(firstArr, secondArr, count) {
        let arrToAdd = secondArr.slice().split('');

        let repeat = secondArr.length;


        if (count > -1) {
            arrToAdd = secondArr.slice().split('').reverse().slice(0, count).reverse();
            repeat = arrToAdd.length;
        }


        let returnValue = {
            text: '',
        };

        for (let i = 0; i < firstArr.length; i++) {
            let currentChar = firstArr[i];
            if (repeat === 0) {
                arrToAdd = secondArr.slice().split('');
                repeat = secondArr.length;
            }
            switch (currentChar) {

                case 'a':
                    currentChar = arrToAdd.shift().toUpperCase();
                    repeat--;
                    break;
                case 'e':
                    currentChar = arrToAdd.shift().toUpperCase();
                    repeat--;
                    break;
                case 'i':
                    currentChar = arrToAdd.shift().toUpperCase();
                    repeat--;
                    break;
                case 'o':
                    currentChar = arrToAdd.shift().toUpperCase();
                    repeat--;
                    break;
                case 'u':
                    currentChar = arrToAdd.shift().toUpperCase();
                    repeat--;
                    break;
                default:
                    break;
            }
            returnValue.text += currentChar;
        }

        returnValue['count'] = repeat;
        return returnValue;
    }
}

solve([

    'ilovepizza', 'ihatevegetables',

    'orange'

]);