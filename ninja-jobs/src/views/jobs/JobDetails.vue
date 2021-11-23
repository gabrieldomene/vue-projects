<template>
  <div v-if="job">
    <h1>{{ job.role }}</h1>
    <p>{{ job.name }} - {{ job.gender }}</p>
    <p>Working at {{ job.company }}</p>
    <p>The job id is {{ job.id }}</p>
  </div>
  <div v-else>
     Loading job details....
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => this.job = data)
      .catch((err) => console.log(err.message))
  }
}
</script>

<style>

</style>