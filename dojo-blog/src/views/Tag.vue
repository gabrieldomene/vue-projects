<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div class="layout" v-if="posts.length">
    <PostList :posts="filteredPosts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import Spinner from '@/components/Spinner.vue'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { getPosts } from '../composables/getPosts'

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute()

    const { posts, error, load } = getPosts()

    load()

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })
    
    return { route, posts, error, filteredPosts, load }
  },
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
</style>