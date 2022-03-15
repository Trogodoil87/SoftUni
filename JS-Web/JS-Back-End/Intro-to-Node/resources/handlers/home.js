const fs = require('fs');

const layout = (items) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="../../content/styles/site.css">
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" />
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/addBreed">Add Breed</a></li>
                <li><a href="/addCat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
                ${items.map(i => `<li><img src="${i.img}"> <h3>${i.title == undefined ? '' : i.title}</h3> <p><span>Breed: ${i.breed}</span></p> <p><span>Description: ${i.description}</span></p></li>
                <ul>
                <li class="btn edit"><a href="/editCat?id=${i._id}">Change111 Info</a></li>
                <li class="btn delete"><a href="">New Home</a></li>
                </ul>`).join('\n')}
            </ul>
        </section>
    </main>

</body>

</html>`

function homeControler(req, res) {
    fs.readFile('../data/cats.json', (err, data) => {
        const dataObj = JSON.parse(data.toString());
        const items = Object.entries(dataObj).map(([_id, item]) => Object.assign({}, item, { _id }));
        res.write(layout(items));
        res.end();
    });
    // fs.createReadStream('../views/home/index.html').pipe(res);
}

module.exports = {
    homeControler
}