<template>
  <div id="app">
    <div>{{timerValue}}</div>
    <button v-on:click="startTimer">Start timer</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      timerValue: 0,
      timerId: null,
    }
  },
  components: {},
  methods:{
    startTimer() {
      this.timerId = setInterval(()=>{
        this.timerValue++;
      }, 1000);
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
