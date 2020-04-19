import VueRouter from 'vue-router'
import HomePage from './components/Base/Body/HomePage'
import WorkerBody from './components/Base/Body/WorkerBody'


export  default new VueRouter({
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/workers',
      component: WorkerBody
    }
  ]
})

