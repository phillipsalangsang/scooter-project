class Scooter {
  constructor(station) {
      this.station = station;
      this.user = null;
      this.serial = Scooter.nextSerial++;
      this.charge = 100;
      this.isBroken = false;
  }

  rent() {
      if (this.charge > 20 && !this.isBroken) {
          this.station = null;
          this.user = user;
          return this;
      } else if (this.charge <= 20) {
          throw new Error("Scooter needs to charge");
      } else {
          throw new Error("Scooter needs repair");
      }
  }

  dock(station) {
      this.station = station;
      this.user = null;
  }

  async recharge() {
      console.log('Starting charge');
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.charge = 100;
      console.log('Charge complete');
  }

  requestRepair() {
      setInterval(() => {
          this.isBroken = false;
          console.log('Repair completed');
      }, 5000);
  }
}

Scooter.nextSerial = 1;


module.exports = Scooter
