<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{active: current === 'all' }"
    >View All ({{ sumAll }})</button>
    <button
      @click="updateFilter('completed')"
      :class="{active: current === 'completed' }"
    >Completed ({{ counts.completed }})</button>
    <button
      @click="updateFilter('ongoing')"
      :class="{active: current === 'ongoing' }"
    >Ongoing ({{ counts.ongoing }})</button>
  </nav>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      required: true
    },
    counts: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    }
  },
  computed: {
    sumAll() {
      return this.counts.completed + this.counts.ongoing
    }
  }

}
</script>

<style>
  @import "../../public/filternav.css";
</style>