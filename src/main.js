// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/common.scss'
import router from './router/router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    watch: {
        // 监视路由，参数为要目标路由和当前页面的路由
        '$route' (to, from){
            console.log('to: ' + to.path + ', from: ' + from.path)
        }
    }
})
