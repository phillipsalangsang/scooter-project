// class Scooter {
//   static nextSerial = 1;
  
//   constructor(station) {
//     this.station = station;
//     this.user = null;
//     this.serial = Scooter.nextSerial++;
//     this.charge = 100;
//     this.isBroken = false;
//   }

//   rent() {
//     if (this.charge <= 20) {
//       throw new Error("Scooter needs to recharge");
//     } else if (this.isBroken) {
//       throw new Error("Scooter needs repair");
//     } else {
//       this.station = null;
//       this.user = user;
//     }
//   }

//   dock(station) {
//     this.station = station;
//     this.user = null;
//   }

//   async charge() {
//     console.log('Starting charge');

//     await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
//     this.charge = 100;

//     console.log('Charge complete');
//   }

//   // recharge() {
//   //   let charge = this.charge;
//   //   const intervalId = setInterval(() => {
//   //     charge += 5;
//   //     if (charge >= 100) {
//   //       clearInterval(intervalId);
//   //       console.log("Scooter fully charged");
//   //     } else {
//   //       console.log(`Scooter charge: ${charge}%`);
//   //     }
//   //   }, 1000);
//   // }

//   async requestRepair() {
//     console.log('Repair requested');

//     await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
//     this.broken = false;

//     console.log('Repair complete');
//   }

//   // requestRepair() {
//   //   this.isBroken = true;
//   //   const intervalId = setInterval(() => {
//   //     this.isBroken = false;
//   //     clearInterval(intervalId);
//   //     console.log("Repair completed");
//   //   }, 5000);
//   // }
// }














// class Scooter {
//   static nextSerial = 1;

//   constructor(station) {
//     this.station = station;
//     this.user = null;
//     this.serial = Scooter.nextSerial++;
//     this.charge = 100;
//     this.isBroken = false;
//   }

//   rent(user) {
//     if (this.charge <= 20) {
//       throw new Error("scooter needs to charge");
//     }
//     if (this.isBroken) {
//       throw new Error("scooter needs repair");
//     }
//     this.station = null;
//     this.user = user;
//   }

//   dock(station) {
//     this.station = station;
//     this.user = null;
//   }

//   recharge() {
//     let charge = 0;
//     const interval = setInterval(() => {
//       charge += 10;
//       this.charge = charge;
//       console.log(`Scooter charge: ${this.charge}%`);
//       if (this.charge === 100) {
//         clearInterval(interval);
//       }
//     }, 1000);
//   }

//   requestRepair() {
//     this.isBroken = true;
//     setTimeout(() => {
//       this.isBroken = false;
//       console.log("Repair completed");
//     }, 5000);
//   }
// }

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
