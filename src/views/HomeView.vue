<script setup lang="ts">
import NavBar from "../components/NavBar.vue"


</script>
<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="content">
        <div class="description">
          <h2>Welcome to FoodDies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tempor tempus. Integer molestie congue odio non auctor. Praesent a justo vel mi blandit dictum. Sed a congue ipsum, sed varius ante. Cras a velit vulputate, gravida sapien nec, consequat mauris. Sed rhoncus a enim ac pellentesque. Nullam non mollis lorem.</p>
        </div>
        <div class="image-container">
          <img src="../assets/kisspng-hamburger-fast-food-cheeseburger-recipe-burguer-5ac3046af1e366.0010721715227300909908.png" alt="Description image" />
        </div>
      </div>
    </div>
    <div class="search-container">
      <input type="text" placeholder="Search..." />
      <button class="search-button">Search</button>
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
}

input[type="text"] {
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