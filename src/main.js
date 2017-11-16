// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/common.scss'
import App from './App'
import router from './router/router'
import Prototype from './global/Prototype'

/* plugins */
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    watch: {

    },
    template:'<App/>',
    components:{App}
})
