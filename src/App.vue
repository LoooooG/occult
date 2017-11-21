<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<style>
    /*.slide-left-enter,*/
    /*.slide-right-leave-active {*/
        /*opacity: 0;*/
        /*-webkit-transform: translate(100%, 0);*/
        /*transform: translate(100%, 0);*/
    /*}*/

    /*.slide-left-leave-active,*/
    /*.slide-right-enter {*/
        /*opacity: 0;*/
        /*-webkit-transform: translate(-100%, 0);*/
        /*transform: translate(-100% 0);*/
    /*}*/

    /*!*.slide-right-enter-to nav.mui-bar.mui-bar-tab,.slide-left-enter-to nav.mui-bar.mui-bar-tab{*!*/
        /*!*opacity: 0;*!*/
    /*!*}*!*/

    /*!*.mui-bar.mui-bar-tab {*!*/
        /*!*opacity: 1;*!*/
        /*!*transition: opacity .5s;*!*/
    /*!*}*!*/

    .child-view {
        width: 100%;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
</style>

<script>
    import Url from '@/global/Url'
    import Wechat from '@/global/Wechat'

    export default {
        name: 'app',
        data(){
            return {
                transitionName: ''
            };
        },
        watch: {
//            '$route' (to, from) {
//                const toDepth = to.path.split('/').length
//                const fromDepth = from.path.split('/').length
//                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//                return;
//                if (from.path == '/') {
//                    return this.transitionName = "";
//                }
//                if (from.path == '/customer/detail' && to.path == '/customer/list') {
//                    return this.transitionName = "slide-right";
//                }
//                if (to.path == '/customer/detail') {
//                    const toDepth = to.path.split('/').length
//                    const fromDepth = from.path.split('/').length
//                    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//                    return;
//                }
//                return this.transitionName = '';
//            }
        },
        created() {
            this.$http.post(Url.urlList.URL_WX_CONFIG, {url: window.location.href}).then(response => {
                let config = response.body.data
                Wechat.getInstance().config(config)
            }).catch(response => {

            })
        }
    }
</script>
<style>
</style>
