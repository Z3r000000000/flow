<template>
  <header>
    <div class="overlay">
      <div class="logo">
        <img src="../imege/logo.png" alt="Логотп" />
      </div>
      <h3>УСЛУГИ СПЕЦТЕХНИКИ В КРАСНОЯРСКЕ</h3>
      <p>
        Индивидуальный подход, оперативное выполнение поставленных задач,
        профессиональные операторы. Договорные отношения приветствуются, любая
        форма оплаты, гибкая система скидок на оказание услуг!
      </p>
      <br />
      <button @click="openModal">Оставить заявку</button>
      <Modal ref="modal" @submit-form="submitForm" />
    </div>
  </header>
</template>

<script>
import Modal from './Modal.vue';
import axios from 'axios';

export default {
  components: {
    Modal,
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    },
    submitForm(data) {
      this.sendFormData(data);
    },
    async sendFormData(data) {
      try {
        await axios.post('https://8962a1eb5edc700e.mokky.dev/order', data);
        this.$refs.modal.closeModal();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>