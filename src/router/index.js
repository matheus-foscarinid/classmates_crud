import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

import Classmates from '../views/Classmates.vue';
import Classmate from '../views/Classmate.vue';
import EditClassmate from '../views/EditClassmate.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/classmates',
    name: 'classmates',
    component: Classmates,
  },
  {
    path: '/classmates/:id',
    name: 'view-classmate',
    component: Classmate,
  },
  {
    path: '/classmates/:id/edit',
    name: 'edit-classmate',
    component: EditClassmate,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
