import { ref } from 'vue';
import { auth } from '../firebase/config';
// import {   } from 'firebase/auth';

const user = ref(auth.currentUser);

auth.onAuthStateChanged((_user) => {
  user.value = _user
});

const getUser = () => {
  return { user }
}

export { getUser }