import Vue from 'vue';
import Router from 'vue-router';
import Arteezy from '../components/Arteezy.vue';
import Register from '../components/Register.vue';

Vue.use(Router);

console.log(Arteezy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arteezy',
      component: Arteezy,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
