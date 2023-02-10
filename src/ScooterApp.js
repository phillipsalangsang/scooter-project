const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      "station1": [],
      "station2": [],
      "station3": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered");
    }
    if (age < 18) {
      throw new Error("Too young to register");
    }
    this.registeredUsers[username] = new User(username, password, age);
    console.log(`${username} has been registered`);
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
      throw new Error("Username or password is incorrect");
    }
    user.login();
    console.log(`${username} has been logged in`);
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user || !user.isLoggedIn) {
      throw new Error("No such user is logged in");
    }
    user.logout();
    console.log(`${username} has been logged out`);
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    const scooter = new Scooter();
    this.stations[station].push(scooter);
    scooter.station = station;
    console.log(`New scooter created`);
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    if (scooter.station === station) {
      throw new Error("Scooter already at station");
    }
    this.stations[station].push(scooter);
    scooter.station = station;
    console.log(`Scooter docked at ${station}`);
  }

  rentScooter(scooter, user) {
    for (const station in this.stations) {
      const index = this.stations[station].indexOf(scooter);
      if (index !== -1) {
        this.stations[station].splice(index, 1);
        scooter.rent(user);
        console.log(`Scooter rented by ${user.username}`);
        return;
      }
    }
    throw new Error("Scooter already rented");
  }

  print() {
    console.log("Registered Users:");
    for (const username in this.registeredUsers) {
      console.log(`- ${username}`);
    }
    console.log("Stations:");
    for (const station in this.stations) {
      console.log(`- ${station}: ${this.stations[station].length} scooters`);
    }
  }
}

module.exports = ScooterApp
