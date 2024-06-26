<template>
  <div class="list-table">
    <div class="product-table">
      <h2>Список Товаров</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
              <td class="description-cell">
                <div class="description-wrapper">
                  {{ product.description }}
                </div>
              </td>
              <td>
                <button @click="showEditModal(product)">Редактировать</button>
                <button @click="deleteProduct(product.id)">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Модальное окно для редактирования товара -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>{{ editedProduct.id ? 'Редактирование товара' : 'Создание нового товара' }}</h2>
        <form @submit.prevent="saveProduct">
          <label for="title">Название:</label>
          <input type="text" id="title" v-model="editedProduct.title" />
          <label for="price">Цена:</label>
          <input type="number" id="price" v-model="editedProduct.price" />
          <label for="description">Описание:</label>
          <textarea id="description" v-model="editedProduct.description"></textarea>
          <h3>Изображения</h3>
          <div class="image-upload">
            <input type="text" @change="handleImageUpload" />
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProductTable',
  data() {
    return {
      products: [],
      showModal: false,
      editedProduct: {
      id: null,
      title: '',
      price: 0,
      description: '', // добавляем это поле
      images: []
    }
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('https://8962a1eb5edc700e.mokky.dev/items')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Ошибка при получении товаров:', error);
        });
    },
    getImageUrl(productId) {
      return `https://8962a1eb5edc700e.mokky.dev/itemsimage?carId=${productId}`;
    },
    showEditModal(product) {
      this.editedProduct = { ...product };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.editedProduct = {
        id: null,
        title: '',
        price: 0,
        images: []
      };
    },
    addImage() {
      this.editedProduct.images.push(null);
    },
    removeImage(index) {
      this.editedProduct.images.splice(index, 1);
    },
    handleImageUpload(event, index) {
      this.editedProduct.images[index] = event.target.files[0];
    },
    saveProduct() {
  const productData = {
    title: this.editedProduct.title,
    price: this.editedProduct.price,
    description: this.editedProduct.description, // добавляем это поле
    images: this.editedProduct.images
  };

  axios.patch(`https://8962a1eb5edc700e.mokky.dev/items/${this.editedProduct.id}`, productData)
    .then(() => {
      console.log('Товар обновлен успешно');
      this.fetchProducts();
      this.closeModal();
    })
    .catch(error => {
      console.error('Ошибка при обновлении товара:', error);
      alert('Произошла ошибка при обновлении товара. Пожалуйста, попробуйте еще раз.');
    });
},
    deleteProduct(productId) {
      if (window.confirm('Вы действительно хотите удалить этот товар?')) {
        axios.delete(`https://8962a1eb5edc700e.mokky.dev/items/${productId}`)
          .then(() => {
            console.log('Товар успешно удален');
            this.fetchProducts();
          })
          .catch(error => {
            console.error('Ошибка при удалении товара:', error);
          });
      }
    }
  }
};
</script>

<style scoped>
textarea{
  resize: none;
  width: 100%;
  height: 10vh;
  padding: 10px;
  border-radius: ;
}
.list-table{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
}
.product-table {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

img {
  max-width: 100px;
  height: auto;
}

button {
  padding: 6px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.description-cell {
  max-width: 300px;
  white-space: normal;
  overflow-wrap: break-word;
}

.description-wrapper {
  white-space: normal;
  overflow-wrap: break-word;
}

td {
  text-align: center;
  height: 15vh;
}
</style>