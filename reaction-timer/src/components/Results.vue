<template>
  <div class="score">
    <h2>Your score</h2>
    <h3> {{ score }}ms</h3>
    <p class="rank">{{ giveRank }}</p>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number
    }
  },
  data() {
    return {
      rank: ''
    }
  },
  computed: {
    giveRank() {
      if (this.score < 250) return 'extreme';
      else if (this.score < 400) return 'rapid';
      else return 'slow'
    }
  }
}
</script>

<style scoped>
  .score {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    width: 400px;
    background: #f3f3f3;
    border-radius: 20px;
    margin: 2rem auto;
  }

  h2, h3 {
    margin: 0;
  }

  h3 {
    color: #f1a012;
  }

  .rank {
    font-size: 1.4rem;
    color: #f1a012;
    font-weight: bold;
  }
</style>