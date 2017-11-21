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
    import Global from '../../global/Global'

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
            Global.loading.show()
            let param = Url.getCommonParam();
            param.id = Global.getQueryString('id') || 608
            this.$http.post(Url.urlList.URL_MEDIA_GET, param).then(response => {
                // success
                Global.loading.hide()
                this.content = response.body.data
                console.log(this.content, 'ContentLayer')
                // console.log(response)
            }).catch(response => {
                // error
                Global.loading.hide()
                Global.messenger(response.status + ': ' + response.statusText, false)
            })
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>