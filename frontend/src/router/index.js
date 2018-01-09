import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/AppDashboard'
import Notifications from '@/components/AppNotifications'
import Devices from '@/components/configuration/AppDevicesConfig'
import Gear from '@/components/configuration/AppGearConfig'
import Water from '@/components/configuration/AppWaterConfig'
import Calculator from '@/components/tools/AppCalculator'


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
