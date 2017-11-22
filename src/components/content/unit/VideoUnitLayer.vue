<template>
    <div class="video-container">
        <div id="video-player"></div>
    </div>
</template>

<script>
    import {TcPlayer} from "@/global/TcPlayer-2.2.0.js"

    export default {
        name: 'VideoUnitLayer',
        data() {
            return {
                options: {
                    m3u8: "", //请替换成实际可用的播放地址
                    flv: "", //请替换成实际可用的播放地址
                    mp4: "", //请替换成实际可用的播放地址
                    autoplay: false,  //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
                    coverpic: {style: "cover", src: ""},
                    width: 480,     //视频的显示宽度，请尽量使用视频分辨率宽度
                    height: 270,    //视频的显示高度，请尽量使用视频分辨率高度
                    listener: (msg) => {
                        this.listener(msg)
                    }
                }
            }
        },
        mounted() {
            let height = this.video.height
            let width = this.video.width
            this.options.width = document.body.offsetWidth
            if (height && width && width > height) {
                this.options.height = document.body.offsetWidth * height / width
            }
            this.options.m3u8 = this.video.url.toLowerCase().includes('m3u8') ? this.video.url : ''
            this.options.flv = this.video.url.toLowerCase().includes('flv') ? this.video.url : ''
            this.options.mp4 = this.video.url.toLowerCase().includes('mp4') ? this.video.url : ''
            // this.options.mp4 = 'http://precc.hetunlive.com/iup/mediacheck/4c0c6a3b9910477f9a7a1e48a4a09c53.mp4'
            this.options.coverpic.src = this.video.cover

            console.log(this.options, 'VideoUnitLayer')

            let player = new TcPlayer('video-player', this.options)
        },
        props: {
            video: {
                type: Object,
                required: true
            }
        },
        methods: {
            listener(msg) {
                console.log(msg)
                /**
                 * 事件列表
                 * ------------------
                 * error
                 * timeupdate
                 * load
                 * loadedmetadata
                 * loadeddata
                 * progress
                 * fullscreen
                 * play
                 * playing
                 * pause
                 * ended
                 * seeking
                 * seeked
                 * resize
                 * volumechange
                 */
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        margin-top: 10px;
        .video-player {
            width: 100%;
            height: auto;
        }
    }
</style>
