<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollection } from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns';
import { computed } from '@vue/reactivity';
import { onUpdated } from '@vue/runtime-core';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          if (doc.createdAt) {
            let time = formatDistanceToNow(doc.createdAt.toDate());
            return { ...doc, createdAt: time }
          } else {
            return { ...doc }
          }
        })
      }
    })

    onUpdated(() => {
    })
    return { error, documents, formattedDocuments }
  }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>