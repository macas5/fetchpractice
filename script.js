const fetchData = (url) => {
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

const getFirstNamesFiltered = async (url, hairColor, age) => {
    const response = await fetchData(url);
    const firstNameList =[];
    for (let i = 0; i < response.users.length; i++) {
        if (response.users[i].hasOwnProperty('firstName') && response.users[i].hasOwnProperty('hair')){
            if (response.users[i].hasOwnProperty('age') && response.users[i].hair.hasOwnProperty('color')){
                if ((response.users[i].age > age) && (response.users[i].hair.color == hairColor)){
                    firstNameList.push(response.users[i].firstName);
                }
            }
        }
    }
    return firstNameList;
}

getUsernames('https://dummyjson.com/users').then((data) => console.log(data));

getFirstNamesFiltered('https://dummyjson.com/users', 'Black', 25).then((data) => console.log(data));