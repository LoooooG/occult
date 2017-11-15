<template>
    <div class="container">
        <download-bar></download-bar>
        <content-layer
                :content="content"></content-layer>
        <recommend-block></recommend-block>
    </div>
</template>

<script>
    import DownloadBar from '@/components/common/DownloadBar'
    import ContentLayer from '@/components/content/ContentLayer'
    import RecommendBlock from '@/components/common/RecommendBlock'
    import Url from '@/global/Url';

    export default {
        name: 'Share',
        data() {
            return {
                content: {user: {nickname: '', portrait: ''}}
            }
        },
        components: {
            DownloadBar,
            ContentLayer,
            RecommendBlock
        },
        created() {
            // 获取内容详情
            let param = Url.getCommonParam();
            param.id = 611
            this.$http.post(Url.urlList.URL_MEDIA_GET, param).then(response => {
                // success
                this.content = response.body.data
                console.log(this.content)
            }).catch(response => {
                // error
                console.log(response.status + ': ' + response.statusText)
            })
        }
    }
</script>

<style>
    html, body {
        background: #fff;
    }

    .container {
        max-width: 1280px;
        margin: 0 auto;
        overflow-x: hidden;
    }
</style>
