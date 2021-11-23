<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">

    <label>Details:</label>
    <textarea required v-model="details"></textarea>

    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects'
    }
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false
      }

      fetch(this.uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err))
    }
  }

}
</script>

<style scoped>
@import "../../public/addproject.css";
</style>