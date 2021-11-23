<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" v-model="email" autocomplete="email">

    <label>Password:</label>
    <input type="password" required v-model="password" autocomplete="current-password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="backend">Backend developer</option>
      <option value="frontend">Frontend developer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">

    <div class="skills" >
      <p v-for="skill in skills" :key="skill" @click="deleteSkill">{{ skill }}</p>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>
  </form>

  <!-- <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p> -->

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(event) {
      if (event.keyCode === 17 && this.tempSkill) {
        if (this.skills.includes(this.tempSkill)) {
          this.tempSkill = '';
          return;
        };
        this.skills.push(event.target.value)
        this.tempSkill = ''
      }
    },
    deleteSkill(event) {
      const skillName = event.target.innerText;
      const indexMatch = this.skills.findIndex((skill) => skill === skillName)
      if (indexMatch !== -1) this.skills.splice(indexMatch, 1);
    },
    handleSubmit() {
      this.passwordError = this.password.length > 5
        ? '' : 'Password too short, must be 6 char long';

        if (!this.passwordError) {
          console.log('email: ', this.email);
          console.log('password: ', this.password);
          console.log('role: ', this.role);
          console.log('skills: ', this.skills);
          console.log('terms: ', this.terms);
        }
    }
  }

}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    background: #fff;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .skills {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .skills p {
    border: 1px solid #eee;
    background: #eee;
    letter-spacing: 0.5px;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }

  .error {
    color: crimson;
    font-size: 0.8rem;
    margin-top: 10px;
    font-weight: bold;
  }

</style>