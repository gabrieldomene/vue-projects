<template>
  <div v-if="showBlock" class="block" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number
    }
  },
  emits: ['end'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  methods: {
    startTimer() {
      this.timer = Date.now();
    },
    stopTimer() {
      this.reactionTime = Date.now() - this.timer;
      this.$emit('end', this.reactionTime);
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
    }, this.delay);
  },
  unmounted() {
    this.timer = null;
    this.reactionTime = 0;
  }

}
</script>

<style>
  .block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>