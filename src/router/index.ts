import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Text from '../views/Text.vue'
import List from '../views/List.vue'
import Event from '../views/Event.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Compute from '../views/Compute.vue'
import Vif from '../views/Vif.vue'
import Vbind from '../views/Vbind.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/text',
    name: 'Text',
    component: Text
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/compute',
    name: 'Compute',
    component: Compute
  },
  {
    path: '/vif',
    name: 'Vif',
    component: Vif
  },
  {
    path: '/vbind',
    name: 'Vbind',
    component: Vbind
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
