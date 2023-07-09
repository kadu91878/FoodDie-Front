<template>
  <NSpin :show="loading">
    <NavBar />
    <div class="search-container">
      <div class="search-bar">
        <input class="input-burger"
          type="text"
          v-model="search"
          placeholder="Search"
          @keyup.enter="filterBurgers(search)"
        />
        <button class="search-button" @click="filterBurgers(search)">Search</button>
      </div>
      <div class="burger-container">
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
  loading.value = true
  await getBurgers()
  loading.value = false
})

function filterBurgers(search: any) {
  const filtered = burgerList.value.filter((burger: any) => {
    for (const key in burger) {
      const value = burger[key]
      if (value.toString().includes(search)) {
        return true
      }
    }
    return false
  })
  filteredBurgers.value = filtered
}
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.burger-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}

.search-button{
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-left: 10px;
}

.input-burger{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
