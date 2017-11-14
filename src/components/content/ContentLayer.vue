<template>
    <div class="content">
        <user-layer
                :nickname="nickname"
                :portrait="portrait">
        </user-layer>
        <media-layer></media-layer>
        <tag-layer></tag-layer>
    </div>
</template>

<script>
    import UserLayer from './UserLayer'
    import MediaLayer from './MediaLayer'
    import TagLayer from './TagLayer'

    export default {
        name: 'ContentLayer',
        data() {
            return {
                nickname: '谈了个假的恋爱',
                portrait: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510660683159&di=0a3406cb4a35dfd0d479fb2e0c2be8e7&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F1130%2F6272576897a2e42385ddbcf41435d938.jpg'
            }
        },
        computed: {},
        components: {
            UserLayer,
            MediaLayer,
            TagLayer
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>