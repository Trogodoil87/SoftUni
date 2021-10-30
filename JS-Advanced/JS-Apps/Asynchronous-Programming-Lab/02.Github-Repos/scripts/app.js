function loadRepos() {
	let userElement = document.querySelector('#username');
	fetch(`https://api.github.com/users/${userElement.value}/repos`)
		.then(res => res.json())
		.then((data) => {
			document.querySelector('#repos').childNodes[1].remove()

			for (const objData of data) {
				let liElement = document.createElement('li');


				let anchor = document.createElement('a');
				anchor.setAttribute('href', objData.html_url);
				anchor.textContent = objData.full_name;

				liElement.appendChild(anchor);


				document.querySelector('#repos').appendChild(liElement);

			}
		})
		.catch((error) => {
			console.log(error);
		});

}