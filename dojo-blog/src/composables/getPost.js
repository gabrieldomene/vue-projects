import { ref } from '@vue/reactivity'
// firebase import
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const docRef = doc(db, 'posts', id)
      const docReturned = await getDoc(docRef)
      if (!docReturned.exists()) throw Error('The post does not exist')

      post.value = { ...docReturned.data(), id: docReturned.id }
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export { getPost }