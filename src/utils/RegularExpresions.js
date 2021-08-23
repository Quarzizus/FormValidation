const user = /[a-zA-z0-9\W]{3,12}/g;
const name = /[a-zA-z]{3,12}/g;
const email = /[a-zA-z_.-]+@[a-zA-z]+(.[a-z]+)/;
const password = /.{6,12}/;
const tel = /\d{10}/;

export { user, name, email, password, tel };
