let users;

const url = "https://jsonplaceholder.typicode.com/users";
const response = await fetch(url);
users = response.json();

export { users };
