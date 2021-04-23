function solve(dates) {
    let pattern = /[0-9]{2}([-.\/])[A-Za-z]{3}\1[0-9]{4}\b/g;

    let validatedDates = dates.toString().match(pattern);
    let days = [];
    let monts = [];
    let years = [];

    validatedDates.forEach(ele => {
        days.push(ele.match(/\b[0-9]{2}\b/g));
        monts.push(ele.match(/\b[A-Za-z]{3}\b/g));
        years.push(ele.match(/\b[0-9]{4}\b/g));
    }
    );

    let output = [];

    for (let i = 0; i < days.length; i++) {
        output.push(`Day: ${days[i]}, Month: ${monts[i]}, Year: ${years[i]}`)
    }

    console.log(output.join('\n'));
}

solve(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);