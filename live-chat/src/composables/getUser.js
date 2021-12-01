import { ref } from 'vue';
import { auth } from '../firebase/config';
// import {   } from 'firebase/auth';

const user = ref();

auth.onAuthStateChanged((_user) => {

});