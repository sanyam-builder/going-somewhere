<template>
  <div>
    <div>{{ timerValue }}</div>
    <button v-on:click="startTimer">Start timer</button>
    <button v-on:click="pauseTimer">Pause timer</button>
    <button v-on:click="clearTimer">Clear timer</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data: () => {
    return {
      timerValue: 0,
      timerId: null,
      message: 'Click start to start the timer',
    };
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        this.timerValue++;
      }, 1000);
      this.message = 'The timer has started';
    },
    pauseTimer() {
      clearInterval(this.timerId);
      this.message = 'The timer has been paused';
    },
    clearTimer() {
      clearInterval(this.timerId);
      this.timerValue = 0;
      this.message = 'Click start to start the timer';
    },
  },
};
</script>
