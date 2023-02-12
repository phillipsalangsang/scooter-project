const User = require('../src/User');

describe('User Tests', () => {
  let user;
  beforeEach(() => {
    user = new User('johndoe', 'password123', 30);
  });

  test('Test username', () => {
    expect(user.username).toBe('johndoe');
  });

  test('Test password', () => {
    expect(user.password).toBe('password123');
  });

  test('Test age', () => {
    expect(user.age).toBe(30);
  });

  test('Test login', () => {
    expect(user.login('johndoe', 'password123')).toBe(true);
    expect(user.loggedIn).toBe(true);
  });

  test('Test logout', () => {
    user.login('johndoe', 'password123');
    user.logout();
    expect(user.loggedIn).toBeFalsy();
  });
});

// User tests here

// test username

// test password

// test age

// test login

// test logout
