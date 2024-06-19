<template>
  <div class="collage">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img class="main-image" :src="mainImageSrc" alt="Основная фотография">
        <div class="thumbnails">
          <img
            v-for="(thumbnail, index) in thumbnailImages"
            :key="index"
            class="thumbnail"
            :src="thumbnail"
            @click="changeMainImage(thumbnail)"
            alt="Маленькая фотография"
          >
        </div>
      </div>
      <div class="container-1">
        <h1>Экскаватор колесный Hyundai R180W-9S</h1>
        <p>Экскаватор колесный Hyundai R180W-9S Вес 19 т. Глубина копания 6,0 м. Ковш 1,0 м3.</p>
        <p class="price">Цена: от 3500 р./час</p>
      </div>
    </div>
  </div>
</template>

<style>
/* Добавьте необходимые стили */
</style>

<script>
export default {
  props: {
    mainImageSrc: {
      type: String,
      required: true,
    },
    thumbnailImages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeMainImage(src) {
      this.$emit('update-main-image', src);
    },
  },
};
</script>
