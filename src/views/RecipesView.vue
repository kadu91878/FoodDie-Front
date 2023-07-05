<template>
  <NSpin :show="loading">
 <NavBar />
 <div>
  <div v-for="burger in filteredBurgers" :key="burger.id">
    <BurgersCard
  :name="burger.name"
  :description="burger.description"
  :ingredients="burger.ingredients"
  :instructions="burger.instructions"
  :picture="burger.picture"
/>
</div>
  </div>
  </NSpin>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import { NSpin, affixProps } from 'naive-ui'
import axios from 'axios'
import type { burger } from '../types/burger'
import { onMounted, ref } from 'vue'
import BurgersCard from '../components/BurgersCard.vue'

const burgerList = ref<burger[]>([])
const loading = ref(false)
const filteredBurgers = ref<burger[]>([])

const getBurgers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/burgers/getBurgers')
    burgerList.value = response.data
    filteredBurgers.value = burgerList.value
    console.log('burgers', filteredBurgers.value)
    console.log('response', filteredBurgers.value)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  loading.value = true;
  await getBurgers()
  loading.value = false;
})
</script>
