<template>
  <n-card>
    <n-image :src="getImageUrl(props.picture)" alt="Imagem do produto´" width="200" height="200" />
    <div class="burger-info">
      <div class="burger-name">{{ props.name }}</div>
      <div class="burger-ingredient">{{ props.ingredients }}</div>
      <div class="burger-description">{{ props.description }}</div>
      <div class="burger-instructions">{{ props.instructions }}</div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
// import {defineProps}  from "vue";

import { NCard, NImage } from 'naive-ui'

const props = defineProps(['name', 'ingredients', 'description', 'instructions', 'picture'])
// const props = defineProps({name: String, ingredients:String, description: String, instructions: String, picture: String});

const getImageUrl = (imageName: string) => {
  // Replace 'http://localhost:8080' with your actual API URL
  return `http://localhost:8080/burgers/images/${imageName}`
}

</script>

<style scoped>
.burger-card {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.burger-image {
  display: flex;
  width: 15px;
  height: 20px;
  margin-right: 20px;
}
img {
  width: 50%;
  height: 50%;
  display: flex;
  padding: 10px;
}

.burger-info {
  display: flex;
  flex-direction: column;
}

.burger-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.burger-ingredient {
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
}

.burger-description {
  font-size: 14px;
  margin-bottom: 10px;
  color: #666;
}

.burger-instructions {
  font-size: 18px;
  font-weight: bold;
  color: #00c;
}
</style>
