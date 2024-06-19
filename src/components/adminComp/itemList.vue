<template>
  <div class="list-table">
    <div class="product-table">
      <h2>Список Товаров</h2>
      <table>
        <thead>
          <tr>
            <th>Изображение</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <img :src="getImageUrl(product.id)" alt="Product Image" />
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="showEditModal(product)">Редактировать</button>
              <button @click="deleteProduct(product.id)">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Модальное окно для редактирования товара -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>Редактирование товара</h2>
        <form @submit.prevent="saveProduct">
          <label for="title">Название:</label>
          <input type="text" id="title" v-model="editedProduct.title" />
          <label for="price">Цена:</label>
          <input type="number" id="price" v-model="editedProduct.price" />

          <h3>Изображения</h3>
          <div v-for="(image, index) in editedProduct.images" :key="index">
            <input type="text" @change="handleImageUpload($event, index)" />
            <button @click.prevent="removeImage(index)">Удалить</button>
          </div>
          <button type="button" @click="addImage">Добавить изображение</button>

          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
        images: []
      }
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('https://8962a1eb5edc700e.mokky.dev/items')
        .then(response => response.json())
        .then(data => {
          this.products = data;
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
      this.editedProduct = null;
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
    const formData = new FormData();
    formData.append('title', this.editedProduct.title);
    formData.append('price', this.editedProduct.price);

    this.editedProduct.images.forEach((image, index) => {
      if (image) {
        formData.append(`images[${index}]`, image);
      }
    });

    fetch(`https://8962a1eb5edc700e.mokky.dev/items?id=${this.editedProduct.id}`, {
      method: 'PATCH',
      body: formData
    })
      .then(() => {
        console.log('Товар обновлен успешно');
        this.fetchProducts();
        this.closeModal();
      })
      .catch(error => {
        console.error('Ошибка при обновлении товара:', error);
      });
  }
},
deleteProduct(productId) {
      // Показываем модальное окно с запросом подтверждения на удаление
      if (window.confirm('Вы действительно хотите удалить этот товар?')) {
        // Отправляем DELETE-запрос на сервер для удаления товара
        fetch(`https://8962a1eb5edc700e.mokky.dev/items?id=${productId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            // Если запрос успешен, выводим сообщение об успешном удалении
            if (response.ok) {
              console.log('Товар успешно удален');
              // Обновляем список товаров после удаления
              this.fetchProducts();
            } else {
              // Если запрос завершился с ошибкой, выводим сообщение об ошибке
              console.error('Ошибка при удалении товара:', response.status);
            }
          })
          .catch((error) => {
            // Если произошла ошибка при отправке запроса, выводим сообщение об ошибке
            console.error('Ошибка при удалении товара:', error);
          });
      }
    }
  }
</script>

<style scoped>
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
</style>