<template>
    <div class="user_layer base-margin-left-right clearfix">
        <img class="portrait" :src="portrait" alt="">
        <span class="nickname">{{nickname}}</span>
        <span class="follow blue">+关注</span>
    </div>
</template>

<script>
    import DefPortrait from '../../assets/img/def_head.png';

    export default {

        name: 'UserLayer',
        data() {
            return {}
        },
        props: {
            nickname: {
                type: String,
                default: "昵称"
            },
            portrait: {
                type: String,
                default: DefPortrait
            }
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
        }
    }
</style>