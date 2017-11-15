<template>
    <div class="content">
        <user-layer :user="getUser"></user-layer>
        <media-layer></media-layer>
        <tag-layer :contentTag="getContentTag"></tag-layer>
    </div>
</template>

<script>
    import UserLayer from './UserLayer'
    import MediaLayer from './MediaLayer'
    import TagLayer from './TagLayer'

    export default {
        name: 'ContentLayer',
        computed: {
            getUser() {
                return this.content.user
            },
            getContentTag() {
                return this.content.contentTag
            }
        },
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