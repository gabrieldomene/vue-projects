import { ref } from '@vue/reactivity'
// firebase import
import { db } from '../firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const colRef = collection(db, 'posts')
      const q = query(colRef, orderBy('createdAt', 'desc'))
      const queryPosts = await getDocs(q);
      let docs = []
      queryPosts.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      posts.value = docs
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export { getPosts }