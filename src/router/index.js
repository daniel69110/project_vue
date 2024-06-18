import { createRouter, createWebHistory } from 'vue-router';
import Taches from '../components/Taches.vue';
import TacheDetail from '../components/TacheDetail.vue';
import TacheForm from '../components/TacheForm.vue';

const routes = [
  {
    path: '/Taches',
    name: 'Taches',
    component: Taches
  },

  {
    path: '/taches/TacheDetail',
    name: 'TacheDetail',
    component: TacheDetail
  },
  {
    path: '/taches/TacheForm',
    name: 'TacheForm',
    component: TacheForm
  }
];

// Crea l'istanza del router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
