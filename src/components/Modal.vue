<template>
  <div id="modal" style="z-index: 10000; overflow: hidden;" class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Введите номер телефона и имя</h2>
      <form id="form" @submit.prevent="submitForm">
        <input
          type="text"
          id="name"
          placeholder="Имя"
          required
          v-model="name"
        />
        <input
          type="tel"
          id="phone"
          placeholder="Номер телефона"
          required
          v-model="phone"
        />
        <textarea name="description" v-model="description" resize="none" id="description"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      name: '',
      phone: '',
      description: '',
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.classList.remove('modal-open');
    },
    submitForm() {
      this.$emit('submit-form', { name: this.name, phone: this.phone, description: this.description });
    },
  },
};
</script>

<style>

body.modal-open {
  overflow: hidden;
}
</style>

<style scoped>

  textarea {
    resize: none;
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid #2140cb;
    border-radius: 5em;
  }
</style>