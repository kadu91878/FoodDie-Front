import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipesView.vue'
import UserView from '../views/UsersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView

    }
  ]
})

export default router
