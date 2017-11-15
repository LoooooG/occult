<template>
    <div class="content">
        <user-layer
                :nickname="content.user.nickname"
                :portrait="content.user.portrait">
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
        computed: {},
        components: {
            UserLayer,
            MediaLayer,
            TagLayer
        },
        props: {
            content: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>