<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id }}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons" :class="{ tick: project.complete}">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDetails: false,
      uri: `http://localhost:3000/projects/${this.project.id}`
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch((err) => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })
      })
        .then(() => this.$emit('complete', this.project.id))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.showDetails = this.$props.project.complete
  }
}
</script>

<style scoped>
  @import "../../public/singleproject.css";
</style>