import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: DashboardLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Home.vue')
      },
      {
        path: '/upload',
        name: 'upload an article',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Upload.vue')
      },
      {
        path: '/collections',
        name: 'my collections',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Collections.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/ask',
        name: 'ask an expert',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Ask.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      // {
      //   path: '/contact',
      //   name: 'contact us',
      //   component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Contact.vue')
      // },
      // {
      //   path: '/help',
      //   name: 'help',
      //   component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Help.vue')
      // },
      // {
      //   path: '/about',
      //   name: 'about',
      //   component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/About.vue')
      // },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;