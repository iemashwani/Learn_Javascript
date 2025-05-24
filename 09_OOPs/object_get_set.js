const User = {
  _email: "robo@mail.com",
  _pass: "abcd",


  get email() {
    return this._email.toUpperCase();
  },
  set email(newEmail) {
    this._email = newEmail.toUpperCase();
  },
};

const robo = Object.create(User);

console.log(robo.email);

