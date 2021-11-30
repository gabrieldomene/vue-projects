<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div class="layout" v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import Spinner from '@/components/Spinner.vue'
import { getCollection } from '../composables/getCollection'
import { getPosts } from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts('posts')
    load()
    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  
  .layout {
    display: grid;
    grid-template: 1fr / 3fr 1fr;
    gap: 1.125rem;
  }
</style>
