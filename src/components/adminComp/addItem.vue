<template>
  <div class="add-product">
    <div class="product-form">
      <h2>Добавление Товара</h2>
      <div class="form-group">
        <label for="title">Название:</label>
        <input type="text" id="title" v-model="product.title" />
      </div>
      <div class="form-group">
        <label for="price">Цена:</label>
        <input type="number" id="price" v-model="product.price" />
      </div>
      <div class="form-group">
        <label for="description">Описание:</label>
        <textarea style="resize: none ; width: 100%; height: 150px;" id="description" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
        <label>Изображения:</label>
        <div v-for="(image, index) in product.images" :key="index" class="image-input">
          <input type="text" v-model="image.url" placeholder="URL изображения" />
          <button @click="removeImage(index)">Удалить</button>
        </div>
        <button @click="addImage" class="add-image-btn">Добавить Изображение</button>
      </div>
      <button @click="saveProduct" class="save-btn">Сохранить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        title: '',
        price: 0,
        description: '',
        images: []
      }
    }
  },
  methods: {
    addImage() {
      this.product.images.push({ url: '' });
    },
    removeImage() {
      fetch('https://8962a1eb5edc700e.mokky.dev/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.product)
  })},
  
    saveProduct() {
      // Сохранение товара на сервер
      fetch('https://8962a1eb5edc700e.mokky.dev/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.product)
      })
      .then(response => {
        if (response.ok) {
          console.log('Товар сохранен успешно');
          // Очистка формы
          this.product = {
            title: '',
            price: 0,
            description: '',
            images: [{ url: '' }]
          };
          window.location.reload();
        } else {
          console.error('Ошибка при сохранении товара');
        }
      })
      .catch(error => {
        console.error('Ошибка при сохранении товара:', error);
      });
    }
  }
}
</script>

<style scoped>
.add-product {
  display: flex;
  justify-content: center;

  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.product-form {
  width: 60vw;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.image-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.image-input input {
  flex-grow: 1;
  margin-right: 10px;
}

.add-image-btn, .save-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>