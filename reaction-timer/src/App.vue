<template>
  <h1>Reaction timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0
    }
  },
  methods: {
    start() {
      this.delay = Math.random() * 5000 + 2000;
      this.isPlaying = true;
      this.score = 0;
    },
    endGame(reaction) {
      this.score = reaction
      this.isPlaying = false;
    }
  },
  computed: {
    showResults() {
      return this.score !== 0;
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }

  button {
    height: 36px;
    min-width: 64px;
    border-radius: 4px;
    background: #f1a012;
    color: #fff;
    border: none;
    letter-spacing: 0.15px;
    cursor: pointer;
  }

  button[disabled] {
    opacity: 0.2;
  }
</style>
