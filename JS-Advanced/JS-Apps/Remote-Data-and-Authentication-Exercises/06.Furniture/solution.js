function solve() {
  fetch(`http://localhost:3030/users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: 'admin@abv.bg',
      password: 'adamin'
    })
  })
  .then(res => {
    if (res.status == 200) {
      return res.json()
    } else {
      throw res
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    alert(err.messsage);
  })
}

solve();