<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click Me
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBlock: false,
      reactionTimer: 0,
    };
  },
  props: {
    delay: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    console.log('component mounted');
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log('component updated');
  },
  unmounted() {
    console.log('component unmounted');
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.reactionTimer);
    },
  },

};
</script>

<style>
  .block {
    width: 400px;
    border-radius: 20px;
    background: salmon;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>
