class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(username, password) {
    if (username === this.username && password === this.password) {
      this.loggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loggedIn = false;
  }
}


module.exports = User
