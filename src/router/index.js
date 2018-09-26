import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import login from '@/views/login/login'
import regist from '@/views/login/regist'
import password from '@/views/login/password'

import indexAdd from '@/views/indexAdd'
import indexDetail from '@/views/indexDetail'
import indexTurnCode from '@/views/indexTurnCode'
import indexTurnIn from '@/views/indexTurnIn'
import indexTurnOut from '@/views/indexTurnOut'

import personal from '@/views/personal/personal'
import myBook from '@/views/personal/myBook'
import protocol from '@/views/personal/protocol'
import help from '@/views/personal/help'
import aboutus from '@/views/personal/aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
    	path:'/index',
    	name:'index',
    	component:index
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },
    {
      path:'/regist',
      name:'regist',
      component:regist
    },
    {
      path:'/password',
      name:'password',
      component:password
    },
    {
      path:'/index/indexAdd',
      name:'indexAdd',
      component:indexAdd
    },
    {
      path:'/index/indexDetail/:id/:chainName',
      name:'indexDetail',
      component:indexDetail
    },
    {
      path:'/index/indexTurnCode',
      name:'indexTurnCode',
      component:indexTurnCode
    },
    {
      path:'/index/indexTurnIn',
      name:'indexTurnIn',
      component:indexTurnIn
    },
    {
      path:'/index/indexTurnOut',
      name:'indexTurnOut',
      component:indexTurnOut
    },
    //////////////////////////////////////////////////////////////////////
    {
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/personal/myBook',
      name:'myBook',
      component:myBook
    },
    {
      path:'/personal/protocol',
      name:'protocol',
      component:protocol
    },
    {
      path:'/personal/help',
      name:'help',
      component:help
    },
    {
      path:'/personal/aboutus',
      name:'aboutus',
      component:aboutus
    },
  ]
})
