<template>
  <h1>{{ title }}</h1>
  <p>...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum magnam est, ab dicta dolores, reiciendis ducimus iure animi aliquam hic excepturi quidem architecto unde non ad modi delectus dignissimos.</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="dark" @close="toggleModalTwo">
      <h1>Dark theme</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro laborum quasi qui sed saepe iure. Temporibus facere illo fugiat provident tempora velit earum, officiis, natus, explicabo nobis soluta doloribus!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open</button>
  <button @click="toggleModalTwo">Open two</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'First app',
      header: 'Sign up',
      text: 'Grab the code for the contest',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
  #app, .modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>
