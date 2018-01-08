import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Notifications from '@/components/NotificationsBoard'
import Devices from '@/components/configuration/DevicesConfiguration'
import Gear from '@/components/configuration/GearConfiguration'
import Water from '@/components/configuration/WaterSetup'
import Calculator from '@/components/tools/Calculator'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },
    {
      path: '/configuration/devices',
      name: 'devices',
      component: Devices
    },
    {
      path: '/configuration/gear',
      name: 'gear',
      component: Gear
    },
    {
      path: '/configuration/water',
      name: 'water',
      component: Water
    },
    {
      path: '/tools/calculator',
      name: 'calculator',
      component: Calculator
    }
  ]
})
