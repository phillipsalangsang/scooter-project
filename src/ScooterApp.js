const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      "Romford": [],
      "Mile End": [],
      "London Bridge": [],
      "Whitechapel": [],
      "Bank": [],
      "Monument": [],
      "Richmond": []
    }
    this.registeredUsers = {}
  }
  registerUser(username, password, age){
    if(this.registeredUsers[username]){
      throw new Error('already registered')
    } else if(age < 18){
      throw new Error('too young to register')
    } else {
      this.registeredUsers[username] = new User(username, password, age);
    }
  }

  loginUser(username, password) {
    if (!this.registeredUsers[username] || this.registeredUsers[username].password !== password) {
      throw new Error("Username or password is incorrect");
    } else {
      console.log(`User has been logged in`);
      return this.registeredUsers[username].login(password);
    }
  }
  logoutUser(username) {
    if ((!(this.registeredUsers.hasOwnProperty(username))) || (this.registeredUsers[username].loggedIn === false)) {
      throw new Error("No such user is logged in");
    }
    console.log(`User has been logged out`);
    return this.registeredUsers[username].logout();
  }
  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    const scooter = new Scooter();
    this.stations[station].push(scooter);
    scooter.station = station;
    console.log("Created new scooter");
    return scooter;
  }
  rentScooter(scooter, user) {
    let station = scooter.station;
    for (let key in this.stations) {
        if (station === key) {
          let scooters = Object.values(this.stations[key]);
          if(!scooters.includes(scooter) || scooter.user !== null){
            throw new Error('Scooter already rented');
          } else {
            scooter.user = user;
            scooter.station = null;
            console.log('Scooter is rented');
            break;
          }
        }
    }

  }
  dockScooter(scooter, station) {
    let stationFound = false;
    for (let key in this.stations) {
        if (station === key) {
          let scooters = Object.values(this.stations[key]);
          if(scooters.includes(scooter)){
            throw new Error('scooter already at station');
          } else {

            this.stations[station].push(scooter);
            console.log('scooter is docked');
            stationFound = true;
  
            break;
          }
        }
    }
    if (!stationFound) {
        throw new Error('no such station');
    }
}

  print(){
  }
}

module.exports = ScooterApp
