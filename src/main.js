import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';

import MintUi from 'mint-ui';
Vue.use(MintUi)
import 'mint-ui/lib/style.css';

import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi);

/*import axios from 'axios';
Vue.prototype.$axios=axios;
*/
import api from '@/api/index'
Vue.prototype.$api=api

import './static/css/mobile.css';
// import './static/css/animate.css';


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
