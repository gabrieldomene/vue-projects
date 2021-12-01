<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"/>
      <p>No account? <span @click="showLogin = !showLogin">sign up</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat"/>
      <p>Already registered? <span @click="showLogin = !showLogin">login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 1.125rem 0;
  }

  .welcome form {
    width: 300px;
    margin: 1.125rem auto;
  }

  .welcome label {
    display: block;
    margin: 1.125rem 0 0.725rem;
  }

  .welcome input {
    width: 100%;
    padding: 0.725rem;
    border-radius: 1.125rem;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 0.725rem auto;
  }

  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  .welcome button {
    margin: 1.125rem auto;
  }
</style>