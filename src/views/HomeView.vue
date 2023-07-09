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
const searched = ref(false)
let search = ref('')

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

function handleSearch(){
  filterBurgers(search.value);
  searched.value=true
  console.log(search.value)
}
</script>
<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="content">
        <div class="description">
          <h2>Welcome to FoodDies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tempor
            tempus. Integer molestie congue odio non auctor. Praesent a justo vel mi blandit dictum.
            Sed a congue ipsum, sed varius ante. Cras a velit vulputate, gravida sapien nec,
            consequat mauris. Sed rhoncus a enim ac pellentesque. Nullam non mollis lorem.
          </p>
        </div>
        <div class="image-container">
          <img
            src="../assets/kisspng-hamburger-fast-food-cheeseburger-recipe-burguer-5ac3046af1e366.0010721715227300909908.png"
            alt="Description image"
          />
        </div>
      </div>
    </div>
    <div class="search-container">
      <div>
        <input
          class="input-burger"
          type="text"
          v-model="search"
          placeholder="Search"
          @keyup.enter="handleSearch()"
        />
        <button @click="handleSearch()" class="search-button">Search</button>
      </div>
    </div>
    <div class="burger-container" v-if="searched && filteredBurgers.length > 0">
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
    <div v-else-if="searched && filteredBurgers.length === 0">
      No entries found.
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px auto;
  max-width: 800px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  flex: 1;
  text-align: center;
  margin-right: 20px;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 3%;
}

input[type='text'] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.search-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-left: 10px;
}
</style>
