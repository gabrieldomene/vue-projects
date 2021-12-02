import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'


const getCollection = (c) => {
  const documents = ref(null);
  const error = ref(null);

  let colRef = collection(db, c);
  let q = query(colRef, orderBy('createdAt', 'asc'))

  const unsub = onSnapshot(q, snapshot => {
    let results = []
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
    error.value = null
  }, (err) => {
    error.value = err.message;
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents }
}

export { getCollection };