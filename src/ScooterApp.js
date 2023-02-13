const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {};
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (username in this.registeredUsers) {
      throw new Error("User already registered.");
    }
    if (age < 18) {
      throw new Error("User too young to register.");
    }
    this.registeredUsers[username] = new User(username, password, age);
    console.log(`User ${username} has been registered.`);
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    if (!(username in this.registeredUsers)) {
      throw new Error("Username or password is incorrect.");
    }
    let user = this.registeredUsers[username];
    try {
      user.login(password);
    } catch (e) {
      throw new Error("Username or password is incorrect.");
    }
    console.log(`User ${username} has been logged in.`);
    return user;
  }

  logoutUser(username) {
    if (!(username in this.registeredUsers)) {
      throw new Error("No such user is logged in.");
    }
    let user = this.registeredUsers[username];
    user.logout();
    console.log(`User ${username} is logged out.`);
  }

  createScooter(station) {
    if (!(station in this.stations)) {
      throw new Error("No such station.");
    }
    let scooter = new Scooter(station);
    this.stations[station].push(scooter);
    console.log("New scooter has been created.");
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!(station in this.stations)) {
      throw new Error("No such station.");
    }
    if (!this.stations[station].includes(scooter)) {
      this.stations[station].push(scooter);
    } else {
      throw new Error("Scooter already at station.");
    }
    scooter.dock(station);
    console.log("Scooter has been docked.");
  }

  rentScooter(scooter, user) {
    let found = false;
    for (let station in this.stations) {
      if (this.stations[station].includes(scooter)) {
        found = true;
        this.stations[station].splice(this.stations[station].indexOf(scooter), 1);
        break;
      }
    }
    if (!found) {
      throw new Error("Scooter already rented.");
    }
    scooter.rent(user);
    console.log("Scooter has been rented.");
  }

  print() {
    console.log(this.stations);
    console.log(this.registeredUsers);
  }
}


  module.exports = ScooterApp
