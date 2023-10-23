class Timer {
  constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.resetButton = resetButton;
    this.isRunning = false; // Initialize isRunning to false

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }

    startButton.addEventListener("click", this.start);
    pauseButton.addEventListener("click", this.pause);
    resetButton.addEventListener("click", this.reset);
  }

  start = () => {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;

    if (this.onStart) {
      this.onStart();
    }

    this.tick();
    this.clock = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.onTick) {
      this.onTick();
    }

    if (this.timeRemaining > 0) {
      this.timeRemaining = this.timeRemaining - 1;
    } else {
      if (this.onComplete) {
        this.onComplete();
      }
      alert(`Time's up`);
      this.pause();
    }
  };

  pause = () => {
    this.isRunning = false;
    clearInterval(this.clock);
  };

  reset = () => {
    this.isRunning = false;
    this.durationInput.value = 0;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
