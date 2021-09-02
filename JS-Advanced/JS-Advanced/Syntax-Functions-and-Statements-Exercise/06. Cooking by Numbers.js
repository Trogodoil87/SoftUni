function solve(...params) {
    let num = Number(params[0]);

    for (let i = 1; i < params.length; i++) {
        let operation = params[i];

        switch (operation) {
            case 'chop':
                num = num / 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 0.20;
                break;
            default:
                break;
        }

        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');