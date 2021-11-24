<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="links">
      <router-link v-for="tag in post.tags" :key="tag" :to="{ name: 'Tag', params: { tag: tag} }">
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const snippet = computed(() => {
      return `${props.post.body.substring(0, 100)}...`
    })

    return { snippet }
  }

}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -1rem;
    transform: rotateZ(-1deg);
  }

  .post .links {
    display: flex;
    column-gap: 0.5rem;
  }

  .post .links a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    background: #aaa;
    border-radius: 0.5rem;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s ease-in;
  }

  .post .links a:hover {
    background: #ff8800;
  }
</style>