function solve(input) {

    let houses = input.shift().split('@').map(Number);
    let lastIndexOfCupid = 0;


    for (let i = 0; i < input.length; i++) {
        let [jump, length] = input[i].split(' ');
        length = Number(length);
        if (jump === 'Jump') {

            for (let j = lastIndexOfCupid; j < houses.length; j++) {
                if (j + length >= houses.length) {
                    houses[0] -= 2;
                    if (houses[0] === 0) {
                        console.log(`Place 0 has Valentine's day.`);
                    } else if (houses[0] < 0) {
                        console.log(`Place 0 already had Valentine's day.`);
                    }
                    lastIndexOfCupid = 0;
                    break;
                } else {
                    houses[j + length] -= 2;
                    lastIndexOfCupid = j + length;
                    if (houses[j + length] === 0) {
                        console.log(`Place ${j + length} has Valentine's day.`);
                    } else if (houses[j + length] < 0) {
                        console.log(`Place ${j + length} already had Valentine's day.`);
                    }
                    break;
                }
            }
        } else {
            break;
        }
    }
    
    let cupidFails = houses.filter((v, i) => v > 0);

    console.log(`Cupid's last position was ${lastIndexOfCupid}.`);
    console.log(cupidFails.length > 0 ? `Cupid has failed ${cupidFails.length} places.` : `Mission was successful.`);
}
solve(['0@0@0@0',
'Jump 1',
'Jump 2',
'Love!']);
// solve(['2@4@2',
//     'Jump 2',
//     'Jump 2',
//     'Jump 8',
//     'Jump 3',
//     'Jump 1',
//     'Love!'])