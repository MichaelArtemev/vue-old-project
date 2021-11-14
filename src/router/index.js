import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Tatto from '../views/Tatto.vue'
import Piers from '../views/Piers.vue'
import Correct from '../views/Correct.vue'
import Eye from '../views/Eye.vue'
import Teach from '../views/Teach.vue'
import Del from '../views/Del.vue'
import Money from '../views/Money.vue'
import Blog1 from '../views/Blog1.vue'
import Blog2 from '../views/Blog2.vue'
import Blog3 from '../views/Blog3.vue'
import Blog4 from '../views/Blog4.vue'
import Blog5 from '../views/Blog5.vue'
import Blog6 from '../views/Blog6.vue'
import Karim from '../views/Karim.vue'
import Michael from '../views/Michael.vue'
import Vit from '../views/Vit.vue'
import Farid from '../views/Farid.vue'
import Booking from '../views/Booking.vue'


















Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/karim',
    name: 'Karim',
    component: Karim
  },
  {
    path: '/farid',
    name: 'Farid',
    component: Farid
  },
  {
    path: '/janne',
    name: 'Michael',
    component: Michael
  },
  {
    path: '/vit',
    name: 'Vit',
    component: Vit
  },
  {
    path: '/blog1',
    name: 'Blog1',
    component: Blog1
  },
  {
    path: '/blog5',
    name: 'Blog5',
    component: Blog5
  },
  {
    path: '/blog6',
    name: 'Blog6',
    component: Blog6
  },
  {
    path: '/blog2',
    name: 'Blog2',
    component: Blog2
  },
  {
    path: '/blog3',
    name: 'Blog3',
    component: Blog3
  },
  {
    path: '/blog4',
    name: 'Blog4',
    component: Blog4
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/del',
    name: 'Del',
    component: Del
  },
  {
    path: '/teach',
    name: 'Teach',
    component: Teach
  },
  {
    path: '/eye',
    name: 'Eye',
    component: Eye
  },
  {
    path: '/correct',
    name: 'Correct',
    component: Correct
  },
  {
    path: '/piers',
    name: 'Piers',
    component: Piers
  },
  {
    path: '/tattos',
    name: 'Tatto',
    component: Tatto
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
