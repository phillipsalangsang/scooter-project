const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe("ScooterApp Tests", () => {
    let scooterApp;
    let user;
    let scooter;
    beforeEach(() => {
      scooterApp = new ScooterApp();
      user = new User("username", "password", 18);
      scooter = new Scooter();
    });
  
    test("Test registerUser", () => {
      scooterApp.registerUser("username", "password", 18);
      expect(scooterApp.registeredUsers.username).toBeDefined();
    });
  
    test("Test loginUser", () => {
      scooterApp.registerUser("username", "password", 18);
      scooterApp.loginUser("username", "password");
      expect(user.isLoggedIn).toBe(true);
    });
  
    test("Test logoutUser", () => {
      scooterApp.registerUser("username", "password", 18);
      scooterApp.loginUser("username", "password");
      scooterApp.logoutUser("username");
      expect(user.isLoggedIn).toBe(false);
    });
  
    test("Test createScooter", () => {
      scooterApp.createScooter("station1");
      expect(scooterApp.stations.station1).toBeDefined();
    });
  
    test("Test dockScooter", () => {
      scooterApp.createScooter("station1");
      scooterApp.dockScooter(scooter, "station1");
      expect(scooterApp.stations.station1).toContain(scooter);
    });
  
    test("Test rentScooter", () => {
      scooterApp.createScooter("station1");
      scooterApp.registerUser("username", "password", 18);
      scooterApp.loginUser("username", "password");
      scooterApp.rentScooter(scooter, user);
      expect(scooter.isRented).toBe(true);
    });
  });

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter
