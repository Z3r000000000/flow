<template>
  <Sidebar/>
  <AddItem/>
  <ItemList/>
</template>

<script setup>
import Sidebar from '../../components/adminComp/sidebar.vue'
import AddItem from '../../components/adminComp/addItem.vue'
import ItemList from '../../components/adminComp/itemList.vue'

</script>
<script>
export default {
  name: 'AdminShop',
  components: {
    AddItem,
    ItemList
  }
}
</script>
<style>

</style>