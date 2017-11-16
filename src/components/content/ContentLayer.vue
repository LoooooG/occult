<template>
    <div class="content">
        <user-layer :user="content.user"></user-layer>
        <media-layer :media="content.media"></media-layer>
        <tag-layer :contentTag="content.contentTag"></tag-layer>
    </div>
</template>

<script>
    import Url from '@/global/Url'
    import UserLayer from './UserLayer'
    import MediaLayer from './MediaLayer'
    import TagLayer from './TagLayer'

    export default {
        name: 'ContentLayer',
        data() {
            return {
                content: {
                    user: {nickname: '', portrait: ''},
                    contentTag: {list: []},
                    media: {type: 0}
                }
            }
        },
        components: {
            UserLayer,
            MediaLayer,
            TagLayer
        },
        created() {
            // 获取内容详情
            let param = Url.getCommonParam();
            param.id = 585
            this.$http.get('/api/content', param).then(response => {
                // success
                this.content = response.body.data
                console.log(this.content.media)
                // console.log(response)
            }).catch(response => {
                // error
                console.log(response.status + ': ' + response.statusText)
            })
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>