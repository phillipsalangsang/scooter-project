// const Scooter = require('../src/Scooter')
// const User = require('../src/User')

// //typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(false);
//   }
// )
// })

// //Method tests
// describe('scooter methods', () => {
//   let scooter;

//   beforeEach(() => {
//     scooter = new Scooter();
//   });

//   test("rent", () => {
//     scooter.rent();
//     expect(scooter.isRented).toBe(true);
//     expect(scooter.user).toBeInstanceOf(User);
//   });

//   test("dock", () => {
//     scooter.rent();
//     scooter.dock();
//     expect(scooter.isRented).toBe(false);
//     expect(scooter.user).toBe(null);
//   });

//   test("requestRepair", () => {
//     scooter.requestRepair();
//     expect(scooter.needsRepair).toBe(true);
//   });

//   test("charge", async () => {
//     await scooter.charge();
//     expect(scooter.charge).toBe(100);
//   });
// });
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
//   test("charge", async () => {
//     const scooter = new Scooter();
//     await scooter.charge(); // we need to wait for the charge!
//     expect(newScooter.charge).toBe(100);
// });

const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('Scooter class', () => {
  let scooter, user;
  beforeEach(() => {
    user = new User();
    scooter = new Scooter("Station 1");
  });

  describe('rent method', () => {
    it('Should check out the scooter to the user if the scooter is charged above 20% and not broken', () => {
      const user = new User();
      const scooter = new Scooter();
      scooter.charge = 50;

      scooter.rent(user);

      expect(scooter.user).toEqual(user);
      expect(scooter.station).toBeNull();
    });

    it('Should throw an error if the scooter is charged below 20%', () => {
      scooter.charge = 15;
      scooter.isBroken = false;
      expect(() => scooter.rent(user)).toThrowError("Scooter needs to charge");
    });

    it('Should throw an error if the scooter is broken', () => {
      scooter.charge = 25;
      scooter.isBroken = true;
      expect(() => scooter.rent(user)).toThrowError("Scooter needs repair");
    });
  });

  // Other test cases for dock, requestRepair, and charge methods

  describe('dock method', () => {
    test('Should return the scooter to the station and clear out the user', () => {
      scooter.rent(user);
      scooter.dock("Station 2");
      expect(scooter.station).toEqual("Station 2");
      expect(scooter.user).toBeNull();
    });
  });

  describe('requestRepair method', () => {
    test('Should schedule a repair in 5 seconds and set isBroken to false', async () => {
      scooter.isBroken = true;
      scooter.requestRepair();
      jest.useFakeTimers();
      jest.runAllTimers();
      expect(scooter.isBroken).toBeFalse();
      jest.clearAllTimers();
    });
  });

  describe('charge method', () => {
    test('Should incrementally update the scooter charge to 100', async () => {
      scooter.charge = 0;
      scooter.charge();
      jest.useFakeTimers();
      jest.runAllTimers();
      expect(scooter.charge).toEqual(100);
      jest.clearAllTimers();
    });
  });
});



