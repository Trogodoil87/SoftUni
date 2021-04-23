function solve(input) {
    let sequnce = input.shift().split(' ').map(Number);

    for (let line of input) {
        let [command, index1, index2] = line.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap') {
            let condesed = sequnce[index1];
            sequnce[index1] = sequnce[index2];
            sequnce[index2] = condesed;
        } else if (command === 'multiply') {
            sequnce[index1] *= sequnce[index2];
        } else if (command === 'decrease') {
            sequnce = sequnce.map((v, i) => v - 1);
        } else {
            break;
        }
    }

    console.log(sequnce.join(', '));
}

solve(['23 -2 321 87 42 90 -123', 

    'swap 1 3', 
    
    'swap 3 6', 
    
    'swap 1 0', 
    
    'multiply 1 2', 
    
    'multiply 2 1', 
    
    'decrease', 
    
    'end']);