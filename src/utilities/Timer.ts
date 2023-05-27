export class Timer {
  private timerId: number | null = null;
  private startTime: number = 0;
  private remainingTime: number = 0;

  startTimer(duration: number, callback: () => void): void {
    if (this.timerId) {
      return;
    }

    this.startTime = Date.now();
    this.remainingTime = duration;

    this.timerId = setTimeout(() => {
      callback();
      this.timerId = null;
    }, duration);
  }

  pauseTimer(): number {
    if (!this.timerId) {
      return 0;
    }

    clearTimeout(this.timerId);
    this.timerId = null;
    const elapsedTime = Date.now() - this.startTime;
    this.remainingTime -= elapsedTime;
    return this.remainingTime;
  }

  resumeTimer(): void {
    if (this.timerId) {
      return;
    }

    this.timerId = setTimeout(() => {
      this.timerId = null;
    }, this.remainingTime);

    this.startTime = Date.now();
    console.log("Timer resumed.");
  }
}
