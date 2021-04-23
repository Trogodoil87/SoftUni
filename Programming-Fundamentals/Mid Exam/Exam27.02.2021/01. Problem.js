function solve(producedPerDay, employee, fabircProduced) {
    let totalProduced = (producedPerDay * employee) * 20;
    let lessProduced = Math.floor((producedPerDay * employee) * 0.75) * 10;
    let output = totalProduced + lessProduced;
    let precentage = Number((((output - fabircProduced) / fabircProduced) * 100).toFixed(2));

    console.log(`You have produced ${output} biscuits for the past month.`);
    console.log(precentage > 0 ? `You produce ${precentage} percent more biscuits.` : `You produce ${Math.abs(precentage).toFixed(2)} percent less biscuits. `);
}
solve(65, 12, 26000);
solve(78, 8, 16000);