const getUsers = (e) => {
    //prevent refreshing site
    e.preventDefault();

    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;
    console.log(usersNumber, usersGender);
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

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