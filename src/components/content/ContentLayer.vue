<template>
    <div class="content">
        <user-layer :user="content.user"></user-layer>
        <media-layer :media="content.media"></media-layer>
        <tag-layer :contentTag="content.contentTag"></tag-layer>
    </div>
</template>

<script>
    import Url from '@/global/Url'
    import Global from '@/global/Global'
    import Wechat from '@/global/Wechat'

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
            Global.loading.show()
            let param = Url.getCommonParam()
            param.id = Global.getQueryString('id') || 608
            this.getContent(param)
            param.client = 'WEB'
            param.type = 'MEDIA'
            param.shareType = 2
            this.getShareData(param)
        },
        methods: {
            getContent(param) {
                this.$http.post(Url.urlList.URL_MEDIA_GET, param).then(response => {
                    // success
                    Global.loading.hide()
                    this.content = response.body.data
                    this.content.media.description = this.content.description || '描述'
                    this.content.media.title = this.content.title || '标题'
                    Wechat.getInstance().setContentId(this.content.id)
                    console.log(this.content, 'ContentLayer')
                    // console.log(response)
                }).catch(response => {
                    // error
                    Global.loading.hide()
                    Global.messenger(response.status + ': ' + response.statusText, false)
                })
            },
            getShareData(param) {
                this.$http.post(Url.urlList.URL_MEDIA_SHARE, param).then(response => {
                    // success
                    console.log(response, 'ContentLayer Share')
                    let data = response.body.data
                    let mediaType
                    switch (data.mediaType) {
                        case "1":
                            mediaType = 'video'
                            break
                        case "2":
                            mediaType = 'music'
                            break
                        default:
                            mediaType = 'link'
                            break
                    }
                    Wechat.getInstance().setShareData(data.title,
                        data.shareUrl, data.portrait, data.content, mediaType, data.dataUrl)
                }).catch(response => {
                    // error
                    console.log(response, 'ContentLayer Share')
                })
            }
        }
    }
</script>

<style scoped>
    .content {
        margin: 10px 0 15px 0;
    }
</style>