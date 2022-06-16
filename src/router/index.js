import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

import Classmates from '../views/classmate/Classmates.vue';
import Classmate from '../views/classmate/Classmate.vue';
import ClassmateEdit from '../views/classmate/ClassmateEdit.vue';
import ClassmateCreate from '../views/classmate/ClassmateCreate.vue';

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
    path: '/classmates/create',
    name: 'classmates',
    component: ClassmateCreate,
  },
  {
    path: '/classmates/:id',
    name: 'view-classmate',
    component: Classmate,
  },
  {
    path: '/classmates/:id/edit',
    name: 'edit-classmate',
    component: ClassmateEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
