<template>
    <div class="video-container">
        <div id="id_test_video" style="width:100%; height:auto;"></div>
    </div>
</template>

<script>
    let player

    export default {
        name: 'VideoUnitLayer',
        data() {
            return {
                playerOptions: {
                    "m3u8": "http://2157.liveplay.myqcloud.com/2157_358535a.m3u8", //请替换成实际可用的播放地址
                    "autoplay" : false,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
                    "coverpic" : "http://www.test.com/myimage.jpg",
                    "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
                    "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
                }
            }
        },
        mounted() {
            this.playerOptions.height = this.video.height
            this.playerOptions.width = this.video.width
            console.log(this.video)
            this.playerOptions.m3u8 = this.video.url
            // this.playerOptions.sources[0].src = 'http://precc.hetunlive.com/iup/mediacheck/4c0c6a3b9910477f9a7a1e48a4a09c53.mp4'
            this.playerOptions.coverpic = this.video.cover

            player = new TcPlayer('id_test_video', this.playerOptions)
        },
        props: {
            video: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        margin-top: 10px;
    }
</style>