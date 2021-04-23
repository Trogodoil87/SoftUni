function solve(input) {
    let users = [];
    let articles = [];
    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let props = line.split(' ');

        if (props[0] === 'user') {
            users.push(props[1]);
            input.splice(i, 1);
            i -= 1;
        } else if (props[0] === 'article') {
            articles.push(props[1]);
            input.splice(i, 1);
            i -= 1;
        }
    }

    let chatInfo = {};
    while (input.length > 0) {
        let line = input.shift();
        let tokens = line.split(': ');
        let user = tokens[0].split(' ')[0];
        let article = tokens[0].split(' ')[3];
        let [title, comment] = tokens[1].split(', ');

        if (users.includes(user) && articles.includes(article)) {
            let obj = {
                user,
                title,
                comment
            };
            if (!chatInfo.hasOwnProperty(article)) {
                chatInfo[article] = [];
            }
            chatInfo[article].push(obj);
        }
    }

    Object.entries(chatInfo).sort((a, b) => b[1].length - a[1].length).forEach(ele => {
        console.log(`Comments on ${ele[0]}`);
        Object.values(ele[1]).sort((a, b) => a.user.localeCompare(b.user)).forEach(e => {
            console.log(`--- From user ${e.user}: ${e.title} - ${e.comment}`);
        });
    });
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);