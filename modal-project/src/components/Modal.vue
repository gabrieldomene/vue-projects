<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
  }

  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }

  .modal p {
    font-style: normal;
  }

  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }

  .modal .actions a {
    color: #333;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 0.25rem;
    text-decoration: none;
    margin: 10px;
  }

  .modal.sale {
    background: crimson;
    color: #fff;
  }

  .modal.sale h1 {
    color: #fff;
  }

  .modal.sale .acttions {
    color: #fff;
  }

  .modal.sale .actions a {
    color: #fff;
  }


</style>