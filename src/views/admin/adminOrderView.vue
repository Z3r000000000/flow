<script setup>
import Sidebar from '../../components/adminComp/sidebar.vue'
</script>

<template>
    <Sidebar/>
    <div class="order">
    <div class="order-table" v-if="orders.length > 0">
    <h2 class="order-table__title">Заявки</h2>
    <table class="order-table__table">
      <thead class="order-table__thead">
        <tr>
          <th class="order-table__th">Имя</th>
          <th class="order-table__th">Телефон</th>
          <th class="order-table__th">Описание</th>
          <th class="order-table__th">Del</th>
        </tr>
      </thead>
      <tbody class="order-table__tbody">
        <tr v-for="order in orders" :key="order.id" class="order-table__row">
          <td class="order-table__td">{{ order.name }}</td>
          <td class="order-table__td">{{ order.phone }}</td>
          <td class="order-table__td">{{ order.description }}</td>
          <td class="order-table__td">
            <button class="order-table__delete-btn" @click="deleteOrder(order.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="no-orders" v-else>
    <p>Нет заявок</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'OrderTable',
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await fetch('https://8962a1eb5edc700e.mokky.dev/order');
        this.orders = await response.json();
      } catch (error) {
        console.error('Ошибка при получении заявок:', error);
      }
    },
    async deleteOrder(orderId) {
      try {
        await fetch(`https://8962a1eb5edc700e.mokky.dev/order/${orderId}`, {
          method: 'DELETE'
        });
        this.fetchOrders(); // обновляем список заказов после удаления
      } catch (error) {
        console.error('Ошибка при удалении заказа:', error);
      }
    }
  }
}
</script>

<style scoped>
.order {
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.order-table {
  padding: 20px;
  width: 80%; /* 增加表格宽度 */
  max-height: 80%; /* 限制表格高度 */
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 添加垂直滚动条 */
}

.order-table__title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.order-table__table {
  width: 100%;
  border-collapse: collapse;
}

.order-table__thead {
  background-color: #333;
  color: #fff;
}

.order-table__th {
  padding: 10px;
  text-align: left;
}

.order-table__tbody .order-table__row:nth-child(even) {
  background-color: #f5f5f5;
}

.order-table__td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.order-table__delete-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.order-table__delete-btn:hover {
  background-color: #c82333;
}
.no-orders {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-weight: bold;
  color: #333;
}

.no-orders>p{
  font-size: 70px;
}
</style>