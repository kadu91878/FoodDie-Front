<template>
    <NavBar />
    <div class="form-container">
      <h2>Add a Burger</h2>
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="burger.name" required />
        </div>
        <div class="form-group">
          <label for="picture">Picture:</label>
          <input type="file" accept="image/*" id="picture" @change="handleFileChange" required />
        </div>
        <div class="form-group">
          <label for="instructions">Instructions:</label>
          <textarea id="instructions" v-model="burger.instructions" required></textarea>
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients:</label>
          <textarea id="ingredients" v-model="burger.ingredients" required></textarea>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="burger.description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue';
  import NavBar from '../components/NavBar.vue';
  
  const burger = ref({
    name: '',
    picture: '',
    instructions: '',
    ingredients: '',
    description: '',
  });
  
  let selectedFile = null;
  
  function handleFileChange(event) {
    selectedFile = event.target.files[0];
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
  
    // Upload the selected file to the specified directory
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile, `burger${burger.value.id}.jpg`);
  
      try {
        const response = await axios.post('http://localhost:8080/burgers/uploadPicture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Assuming the API response contains the filename of the saved picture
        burger.value.picture = response.data.filename;
      } catch (error) {
        console.log(error);
      }
    }
  
    // You can perform API call here to submit the burger details
    // using the data in `burger` ref
  
    // Reset the form
    burger.value = {
      name: '',
      picture: '',
      instructions: '',
      ingredients: '',
      description: '',
    };
  
    selectedFile = null;
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type='text'],
  textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type='submit'] {
    padding: 10px 20px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  