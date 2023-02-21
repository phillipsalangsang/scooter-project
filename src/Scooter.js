class Scooter{
    static nextSerial = 1;
    constructor(station) {
      this.station = station;
      this.charge = 100;
      this.isBroken = false;
      this.user = null;
      this.serial = Scooter.nextSerial;
      Scooter.nextSerial++;
    } 
    rent() {
      if((this.charge > 20) && !(this.isBroken)) {
        return true;
      } else if (this.charge > 20) {
        throw new Error("scooter needs repair")
      } else {
        throw new Error("scooter needs to charge")
      }
    }
    dock(station) {
      this.station = station;
      this.user = null;
    }
    async recharge() {
      console.log("Starting charging...");
      while(this.charge < 100) {
        await new Promise(resolve => setTimeout(resolve, 20));
        this.charge++;
        if(this.charge % 5 === 0) { 
          console.log("Charge at: " + this.charge + "%")
        }
      }
      console.log("Finished charging")
    }
    async requestRepair() {
      await new Promise(resolve => setTimeout(resolve, 5000));
      this.isBroken = false;
      console.log("repair completed");
    }
  }


module.exports = Scooter
