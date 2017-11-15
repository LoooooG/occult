<template>
    <div class="content">
        <user-layer :user="content.user"></user-layer>
        <media-layer :media="content.media"></media-layer>
        <tag-layer :contentTag="content.contentTag"></tag-layer>
    </div>
</template>

<script>
    import UserLayer from './UserLayer'
    import MediaLayer from './MediaLayer'
    import TagLayer from './TagLayer'

    export default {
        name: 'ContentLayer',
        data(){
            return {
                c:{}
            }
        },
        components: {
            UserLayer,
            MediaLayer,
            TagLayer
        },
        props:[
            'content'
        ],
        mounted(){
            console.log(this.content,'content');
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>