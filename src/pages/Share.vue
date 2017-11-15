<template>
    <div class="container">
        <download-bar></download-bar>
        <content-layer :content="content"></content-layer>
        <recommend-block :recommend="recommend"></recommend-block>
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
                content: {
                    user: {nickname: '', portrait: ''},
                    contentTag: {list: []}
                },
                media: {
                    type: 0
                },
                recommend: {
                    list: []
                }
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
            param.id = 585
            this.$http.post(Url.urlList.URL_MEDIA_GET, param).then(response => {
                // success
                this.content = response.body.data
                console.log(this.content)
                // console.log(response)
            }).catch(response => {
                // error
                console.log(response.status + ': ' + response.statusText)
            })

            // 获取大家都在看内容
            this.$http.get('/api/recommend').then(response => {
                this.recommend = response.body.data
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
