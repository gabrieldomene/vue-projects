<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" required v-model="title">

      <label>Content:</label>
      <textarea v-model="body"></textarea>

      <label>Tag (hit ctrl to add)</label>
      <input @keydown.enter.prevent="handleKeyDown" type="text" v-model="tag">

      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { db, timestamp } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value.replace(/\s/, ''))
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp
      }

      const colRef = collection(db, 'posts');
      await addDoc(colRef, post);
      router.push({ name: 'Home' });
    }

    return { title, body, tag, handleKeyDown, handleSubmit, tags }
  }

}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14
  }
</style>