<template>
  <div class="container">
    <h1> {{ title }}</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
  </div>

  <Block v-if="isPlaying" playing="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="!isPlaying" :reaction="score" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from './components/Block/Block.vue';
import Results from './components/Result/Result.vue';

export default defineComponent({
  data() {
    return {
      title: 'Reaction timer',
      isPlaying: false,
      score: 0,
      delay: 0,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = Math.random() * 5000 + 1500;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime: number) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
  components: {
    Block,
    Results,
  },
});
</script>

<style scoped>
  @import './assets/global.css';
</style>
