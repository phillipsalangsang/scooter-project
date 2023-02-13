const User = require('../src/User');

// Start of the User tests suite
describe('User Tests', () => {
  let user;                                               // Declare a variable for the user instance
  beforeEach(() => {                                      // The beforeEach function is run before every test case in the suite.
    user = new User('louis', 'password123', 30);          // Function initializes a new instance of the User class with the given parameters
  });

  // individual test cases

  test('Test username', () => {                           // First test case to check the username property
    expect(user.username).toBe('louis');                  // Use Jest's expect function to check that the username property of the user instance is equal to 'louis'
  });

  test('Test password', () => {
    expect(user.password).toBe('password123');            // Use Jest's expect function to check that the password property of the user instance is equal to 'password123'
  });

  test('Test age', () => {
    expect(user.age).toBe(30);                            // Use Jest's expect function to check that the age property of the user instance is equal to 30
  });

  test('Test login', () => {
    expect(user.login('louis', 'password123')).toBe(true);   // Use Jest's expect function to check that the login method returns true when the correct username and password are provided
    expect(user.loggedIn).toBe(true);                       // Use Jest's expect function to check that the loggedIn property is set to true after a successful login
  });

  test('Test logout', () => {
    user.login('louis', 'password123');                     // Call the login method to log the user in
    user.logout();                                         // Call the logout method to log the user out
    expect(user.loggedIn).toBeFalsy();                    // Use Jest's expect function to check that the loggedIn property is set to false after a logout
  });
});

// User tests here

// test username

// test password

// test age

// test login

// test logout
