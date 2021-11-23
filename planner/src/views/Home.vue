<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" :counts="counts"/>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>

    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterNav
  },
  data() {
    return {
      projects: [],
      current: 'all',
      counts: {
        completed: 0,
        ongoing: 0
      }
    }
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    handleComplete(id) {
      const project = this.projects.find((project) => { return project.id === id });
      if (project.complete){
         this.counts.completed -= 1
         this.counts.ongoing += 1
      } else {
         this.counts.completed += 1
         this.counts.ongoing -= 1
      }
      project.complete = !project.complete
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'ongoing') return this.projects.filter((project) => project.complete === false)
      else if (this.current === 'completed') return this.projects.filter((project) => project.complete === true)
      return this.projects
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => {
        this.projects = data
        this.counts.completed = this.projects.filter((project) => project.complete === true).length;
        this.counts.ongoing = this.projects.length - this.counts.completed;
      })
      .catch((err) => console.log(err.message))
  }
}
</script>


<style scoped>
  .home {
    padding: 2rem 0;
  }
</style>