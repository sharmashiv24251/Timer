const durationInput = document.querySelector(`#timer_duration`);
const startButton = document.querySelector(`#timer_start`);
const pauseButton = document.querySelector(`#timer_pause`);
const resetButton = document.querySelector(`#timer_reset`);

const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
  onStart() {
    console.log(`hi`);
  },
  onComplete() {
    console.log(`done`);
  },
  onTick() {
    console.log(`tick`);
  },
});
