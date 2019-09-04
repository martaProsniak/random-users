const getUsers = (e) => {
    e.preventDefault();
    const url = 'https://randomuser.me/api/?results=10';

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw Error(`Ups! Catch ${response.status}!`)
            } else {
                return response.json()
            }
        })
        .then(users => console.log(users))
        .catch(err => console.log(err))
}

document.querySelector('.generator').addEventListener('submit', getUsers)