const user = /^[a-zA-z0-9]{4,12}/;
const name = /^[a-zA-z]{3,12}/;
const email = /^[a-zA-z0-9_.-]+@[a-zA-z]+(.[a-z]+)/;
const password = /^.{6,12}/;
const tel = /^\d{10}/;

export { user, name, email, password, tel };
