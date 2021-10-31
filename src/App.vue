<template>
  <div id="app">
    <div>{{timerValue}}</div>
    <button v-on:click="startTimer">Start timer</button>
    <button v-on:click="pauseTimer">Pause timer</button>
    <button v-on:click="clearTimer">Clear timer</button>
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      timerValue: 0,
      timerId: null,
      message: 'Click start to start the timer',
    }
  },
  components: {},
  methods:{
    startTimer() {
      this.timerId = setInterval(()=>{
        this.timerValue++;
      }, 1000);
      this.message = "The timer has started"
    },
    pauseTimer() {
      clearInterval(this.timerId);
      this.message = "The timer has been paused"
    },
    clearTimer() {
      clearInterval(this.timerId);
      this.timerValue = 0;
      this.message = "Click start to start the timer"
    },
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
