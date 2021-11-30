<template>
  <div vif="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleDelete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { getPost } from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    Spinner
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const { post, error, load } = getPost(route.params.id)
    load()

    const docRef = doc(db, 'posts', route.params.id);
    const handleDelete = async () => {
      await deleteDoc(docRef)
      router.push({ name: 'Home'})
    }
    return { post, error, handleDelete }
  }

}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }

  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .pre {
    white-space: pre-wrap;
  }

  .delete {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

</style>