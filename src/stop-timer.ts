// Stop Watch Class the includes data types and methods
class stopWatch {
  startStop: boolean = false; // True = Start time
  reset: boolean = false; // True = Reset time
  interval: number = 1000; // Time inerval for setInterval set to 1 sec
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  fullTime: string = "00:00:00";

  // Start or stop time
  toggleStartStopTime(): void {
    this.startStop = !this.startStop;
  }

  // Reset time ----------------!!!!!!!!!! LOGIC ISSUES - Reset button doesnt need toggling but only reset of time
  toggleResetTime(): void {
    this.reset = !this.reset;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.combineTime;
  }

  // Run time
  runTime(): void {
    if (this.startStop) {
      setInterval(() => {
        this.displayTime();
      }, this.interval);
      this.countTime();
    }
  }

  // Transition when sec/min reach 60
  countTime(): void {
    if (this.seconds === 59) {
      if (this.minutes === 59) {
        this.minutes = 0;
        this.hours++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
    } else {
      this.seconds++;
    }
  }

  // Combine time into one string
  combineTime(): void {
    const h: string = this.hours.toString().padStart(2, "0");
    const m: string = this.minutes.toString().padStart(2, "0");
    const s: string = this.seconds.toString().padStart(2, "0");
    this.fullTime = `${h}:${m}:${s}`;
  }

  displayTime(): void {
    this.combineTime();
    console.log(this.fullTime);
  }
}
