import Vue from 'vue'
import App from './App.vue'
// 引入elementUI组件
import ElementUI from 'element-ui';
// 引入elementUI样式
import 'element-ui/lib/theme-chalk/index.css';
//使用elementUI
Vue.use(ElementUI);

// 引入路由
import router from './route/index'
// 通过中间件使用路由
Vue.use(router);

// 引入axios
import './utils/axios.js';
// 公共样式 引入即生效
import './styles/main.scss'
//引入权限控制
import has from '@/utils/btnPermissions.js';

// 引入sessionStorage
import '@/utils/sessionStorage.js';

Vue.config.productionTip = false
new Vue({
    router,
    render: function (h) {
        return h(App)
    },
}).$mount('#app')
