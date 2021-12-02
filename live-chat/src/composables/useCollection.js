import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore'

const useCollection = (col) => {
  const error = ref(null);

  const addToCollection = async (doc) => {
    error.value = null;
    
    try {
      const colRef = collection(db, col);
      await addDoc(colRef, doc)
    } catch (err) {
      console.log(err.message);
      error.value = 'could not send the message'
    }
  }
  return { error, addToCollection }
}

export { useCollection }