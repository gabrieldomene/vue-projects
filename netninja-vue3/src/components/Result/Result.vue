<template>
  <div class="block">
    <p>Reaction time: {{ reaction }}ms</p>
    <p>Rank: {{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: {
    reaction: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.reaction < 250) {
      this.rank = 'GOD';
    } else if (this.reaction < 400) {
      this.rank = 'Rapid';
    } else {
      this.rank = 'Slow';
    }
  },
};
</script>

<style>
  .block {
    width: 400px;
    border-radius: 20px;
    background: lightcoral;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }

  .block p {
    font-size: 1.4em;
    font-weight: bold;
  }
</style>
