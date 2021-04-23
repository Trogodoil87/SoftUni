function movieCast(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let commands = input.slice();
    let movies = [];
    for (let i = 0; i < commands.length; i++) {

        let [...args] = commands[i].split(' ');
        if (args.includes('addMovie')) {
            let movie = args.filter((v, i) => v !== 'addMovie').join(' ');
            movies.push(new Movie(movie));
        } else if (args.includes('directedBy')) {
            let indexOfvalue = args.indexOf('directedBy');
            let director = args.filter((v, i) => i > indexOfvalue).join(' ');
            let movie = args.filter((v, i) => i < indexOfvalue).join(' ');

            let index = movieIndex(movie, movies);
            if (index !== -1) {
                movies[index].director = director;
            }
        } else if (args.includes('onDate')) {
            let indexOfValue = args.indexOf('onDate');
            let date = args.filter((v, i) => i > indexOfValue).join(' ');
            let movie = args.filter((v, i) => i < indexOfValue).join(' ');

            let index = movieIndex(movie, movies);
            if (index !== -1) {
                movies[index].date = date;
            }
        }
    }
    for (let obj of movies) {
        if (obj.name != undefined && obj.director != undefined && obj.date != undefined) {
            console.log(JSON.stringify(obj));
        }
    }


    function movieIndex(movie, arr) {
        for (let i = 0; i < arr.length; i++) {
            let currentObj = arr[i];

            if (currentObj.name === movie) {
                return i;
            }
        }

        return -1;
    }

}

movieCast([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);