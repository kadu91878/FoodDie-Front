<template>
    <nav>
      <div class="navbar-container">
        <div class="navbar-logo">
          <router-link to="/">FoodDies</router-link>
        </div>
        <div class="navbar-links">
          <router-link to="/">Home</router-link>
          <router-link to="/recipes">Recipes</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact Us</router-link>
          
        </div>
      </div>
    </nav>
  </template>

  <style scoped>
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f2f2f2;
  }
  
  .navbar-logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar-links a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
  }
</style>