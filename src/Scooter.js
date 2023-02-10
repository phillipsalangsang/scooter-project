class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge <= 20) {
      throw new Error("scooter needs to charge");
    }
    if (this.isBroken) {
      throw new Error("scooter needs repair");
    }
    this.station = null;
    this.user = user;
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    let charge = 0;
    const interval = setInterval(() => {
      charge += 10;
      this.charge = charge;
      console.log(`Scooter charge: ${this.charge}%`);
      if (this.charge === 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

  requestRepair() {
    this.isBroken = true;
    setTimeout(() => {
      this.isBroken = false;
      console.log("Repair completed");
    }, 5000);
  }
}


module.exports = Scooter
