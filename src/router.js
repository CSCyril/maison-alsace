import Vue from 'vue';
import Router from 'vue-router';
import test from './views/Home.vue';
import Home from './views/Accueil.vue';
import Rooms from './views/Rooms.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms,
    }
  ],
});