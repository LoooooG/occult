<template>
    <div class="user_layer base-margin-left-right clearfix">
        <img class="portrait" :src="getPortrait" alt="" @click="go('detail')">
        <span class="nickname" @click="go('detail')">{{getNickname}}</span>
        <span class="follow" @click="go('detail')">+关注</span>
    </div>
</template>

<script>
    import DefPortrait from '../../assets/img/def_head.png'
    import DownloadOrOpen from '@/components/common/DownloadOrOpen'

    export default {

        name: 'UserLayer',
        computed: {
            getNickname() {
                return this.user.nickname || "昵称"
            },
            getPortrait() {
                return this.user.portrait || DefPortrait
            }
        },
        mixins: [DownloadOrOpen],
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    .user_layer {
        position: relative;
        vertical-align: middle;
        font-size: $content-font;
        line-height: $portrait-side;
        color: $content-color;
        .nickname {
            margin-left: 5px;
        }
        .follow {
            float: right;
            font-size: 12px;
            color: $sub-primary;
        }
    }
</style>