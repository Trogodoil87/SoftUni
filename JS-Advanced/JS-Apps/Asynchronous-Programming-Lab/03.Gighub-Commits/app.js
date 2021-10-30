function loadCommits() {
    let username = document.querySelector(`#username`).value;
    let repository = document.querySelector(`#repo`).value;

    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then((res) => {
            res = res.json();
            console.log(res)
            if (res.status !== 200) {
                let li = document.createElement('li');
                li.textContent = `Error: ${res.status} (Not Found)`;
                document.querySelector('#commits').appendChild(li);
            }
            return res
        })

        .then((data) => {
            for (const obj of data) {
                let li = document.createElement('li');
                li.textContent = `${obj.commit.author.name}: ${obj.commit.message}`;

                document.querySelector('#commits').appendChild(li);
            }
        })
        .catch((error) => {

        });

}
