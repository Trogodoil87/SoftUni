function solve(input) {
    let output = input.shift().split(', ');

    while (input.length > 0) {
        let [command, item] = input.shift().split(' - ');
        switch (command) {
            case 'Collect':
                if (!output.includes(item)) {
                    output.push(item);
                }
                break;
            case 'Drop':
                let index = output.indexOf(item);
                if (index >= 0) {
                    output.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                let oldItemIndex = output.indexOf(oldItem);

                if (oldItemIndex >= 0) {
                    output.splice(oldItemIndex + 1, 0, newItem);
                }
                break;
            case 'Renew':
                let i = output.indexOf(item);

                if (i >= 0) {
                    let spliced = output.splice(i, 1);
                    output.push(spliced);
                }
                break;
            case 'Craft!':
                console.log(output.join(', '));
                break;
            default:
                break;
        }
    }
    console.log();

}
solve([

    'Iron, Sword',

    'Drop - Bronze',

    'Combine Items - Sword:Bow',

    'Renew - Iron',

    'Craft!'

]);