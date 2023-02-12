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


// class ScooterApp {
//   constructor() {
//     this.stations = {
//       "station1": [],
//       "station2": [],
//       "station3": []
//     };
//     this.registeredUsers = {};
//   }

//   registerUser(username, password, age) {
//     if (this.registeredUsers[username]) {
//       throw new Error("User already registered");
//     }
//     if (age < 18) {
//       throw new Error("Too young to register");
//     }
//     this.registeredUsers[username] = new User(username, password, age);
//     console.log(`${username} has been registered`);
//     return this.registeredUsers[username];
//   }

//   loginUser(username, password) {
//     const user = this.registeredUsers[username];
//     if (!user) {
//       throw new Error("User not found");
//     }
//     user.login(password);
//     this.loggedInUser = user;
//     return user;
//   }

//   logoutUser(username) {
//     const user = this.registeredUsers[username];
//     if (!user || !user.isLoggedIn) {
//       throw new Error("No such user is logged in");
//     }
//     user.logout();
//     console.log(`${username} has been logged out`);
//   }

//   createScooter(station) {
//     if (!this.stations[station]) {
//       throw new Error("No such station");
//     }
//     const scooter = new Scooter();
//     this.stations[station].push(scooter);
//     scooter.station = station;
//     console.log(`New scooter created`);
//     return scooter;
//   }

//   dockScooter(scooter, station) {
//     if (!this.stations[station]) {
//       throw new Error("No such station");
//     }
//     if (scooter.station === station) {
//       throw new Error("Scooter already at station");
//     }
//     this.stations[station].push(scooter);
//     scooter.station = station;
//     console.log(`Scooter docked at ${station}`);
//   }

//   rentScooter(scooter, user) {
//     for (const station in this.stations) {
//       const index = this.stations[station].indexOf(scooter);
//       if (index !== -1) {
//         this.stations[station].splice(index, 1);
//         scooter.rent(user);
//         console.log(`Scooter rented by ${user.username}`);
//         return;
//       }
//     }
//     throw new Error("Scooter already rented");
//   }
// const User = require("./User");
// const Scooter = require("./Scooter");

// class ScooterApp {
//   constructor() {
//     this.stations = {
//       Station1: [],
//       Station2: [],
//       Station3: []
//     };
//     this.registeredUsers = {};
//   }

//   registerUser(username, password, age) {
//     if (username in this.registeredUsers) {
//       throw new Error("User already registered");
//     }
//     if (age < 18) {
//       throw new Error("Too young to register");
//     }
//     const newUser = new User(username, password, age);
//     this.registeredUsers[username] = newUser;
//     console.log(`User ${username} has been registered`);
//     return newUser;
//   }

//   loginUser(username, password) {
//     const user = this.registeredUsers[username];
//     if (!user) {
//       throw new Error("Username or password is incorrect");
//     }
//     if (!user.checkPassword(password)) {
//       throw new Error("Username or password is incorrect");
//     }
//     user.login();
//     console.log(`User ${username} has been logged in`);
//   }

//   logoutUser(username) {
//     const user = this.registeredUsers[username];
//     if (!user) {
//       throw new Error("No such user is logged in");
//     }
//     user.logout();
//     console.log(`User ${username} is logged out`);
//   }

//   createScooter(station) {
//     if (!(station in this.stations)) {
//       throw new Error("No such station");
//     }
//     const newScooter = new Scooter(station);
//     this.stations[station].push(newScooter);
//     console.log(`Created new scooter with serial ${newScooter.serial}`);
//     return newScooter;
//   }

//   dockScooter(scooter, station) {
//     if (!(station in this.stations)) {
//       throw new Error("No such station");
//     }
//     if (scooter.station === station) {
//       throw new Error("Scooter already at station");
//     }
//     this.stations[scooter.station] = this.stations[scooter.station].filter(
//       s => s !== scooter
//     );
//     this.stations[station].push(scooter);
//     scooter.dock(station);
//     console.log(`Scooter with serial ${scooter.serial} is docked`);
//   }

//   rentScooter(scooter, user) {
//     const station = scooter.station;
//     if (!station) {
//       throw new Error("Scooter already rented");
//     }
//     this.stations[station] = this.stations[station].filter(
//       s => s !== scooter
//     );
//     scooter.rent(user);
//     console.log(`Scooter with serial ${scooter.serial} is rented`);
//   }

//   print() {
//     console.log("Registered users:");
//     console.log(this.registeredUsers);
//     console.log("Scooter stations:");
//     console
//   }
// } 

  module.exports = ScooterApp
