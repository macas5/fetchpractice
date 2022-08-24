const fetchData = async (url) => {
    return fetch(url).then((response) => response.json());
}

const getUsernames = async (url) => {
    const response = await fetchData(url);
    const usernameList = [];
    for (let i = 0; i < response.users.length; i++) {
        if (response.users[i].hasOwnProperty('username')) {
            usernameList.push(response.users[i].username);
        }
    }
    return usernameList;
}



getUsernames('https://dummyjson.com/users').then((data) => console.log(data));