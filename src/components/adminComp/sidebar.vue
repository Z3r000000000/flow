<template>
    <div class="side-bar">
      <div class="side-top">
        <a class="side-element-menu" id="menu-btn">
        </a>
      </div>
      <div class="side-mid">
        <RouterLink to="/" class="side-element">
          <span class="side-title">Вернуться на сайт 🚪</span>
        </RouterLink>
        <RouterLink to="/admin-shop" class="side-element" >
          <span class="side-title">Товары 📰</span>
        </RouterLink>
        <RouterLink to="/admin-order" class="side-element">
          <span class="side-title">Заказы ✉️</span>
        </RouterLink>
      </div>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<script>

export default {

}
</script>

<style>
.side-bar {
  width: 200px;
  height: 100%;
  background-color: #2d3a4b;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.side-top {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.side-element-menu {
  display: block;
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

.side-element {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.side-element:hover {
  background-color: #555;
}

.side-element .side-title {
  display: inline-block;
  position: relative;
  z-index: 1;
}
</style>