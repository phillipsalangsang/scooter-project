const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('checking the scooter instance integrity', () => {
  const scooter = new Scooter("Romford");
  const scooter2 = new Scooter("Monument");
  test('checking right properites in the constructor', () => {
    expect(scooter).toHaveProperty("user",null);
    expect(scooter.station).toBe("Romford");
    expect(scooter).toHaveProperty("serial");
    expect(scooter).toHaveProperty("charge");
    expect(typeof scooter.isBroken).toBe("boolean");
  }
)

  test("check if static value increments", () => {
    expect(scooter2.serial).toBe(scooter.serial + 1);
  })
})


describe('checking the rent scooter methods', () => {
  const scooter3 = new Scooter("Romford");
  test("checking the rent returns true", () => {
    scooter3.charge = 90;
    scooter3.isBroken = false;
    expect(scooter3.rent()).toBe(true);
  })
  test("checking not enough charge", () => {
    scooter3.charge = 10;
    scooter3.isBroken = false;
    expect(() => {
      scooter3.rent();
    }).toThrow("scooter needs to charge");
  })
  test("checking needs repair", () => {
    scooter3.charge = 60;
    scooter3.isBroken = true;
    expect(() => {
      scooter3.rent();
    }).toThrow("scooter needs repair");
  })

})

describe("checking the dock method", () => {
  const scooter = new Scooter("Monument");
  test("expect station to change", () => {
    scooter.dock("Romford");
    expect(scooter.station).toBe("Romford");
   
  })
  test("expect user to be null when docked", () => {
    scooter.dock("Manhattan");
    
    expect(scooter.user).toBe(null);
  })
});

describe("Testing the repair method", () => {
  jest.setTimeout(9000);
  test("repair", async () => {
    const scooter = new Scooter("Monument");
    scooter.isBroken = true;
    
    await scooter.requestRepair(); 
    expect(scooter.isBroken).toBe(false);
  }); }
);

describe("Testing the charge method", () => {
  test("recharge", async () => {
    const scooter = new Scooter("Romford");
    scooter.charge = 60;
    await scooter.recharge(); 
    expect(scooter.charge).toBe(100);
  }); }
);