<template>
    <div class="video-container">
        <video-player  class="vjs-custom-skin"
                       ref="VideoPlayer"
                       :options="playerOptions"
                       :playsinline="true"
                       customEventName="customstatechangedeventname">
        </video-player>
    </div>
</template>

<script>
    import {videoPlayer} from 'vue-video-player'

    export default {
        name: 'VideoUnitLayer',
        data() {
            return {
                playerOptions: {
                    // videojs options
                    muted: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: ""
                    }],
                    poster: "",
                    width: '100%',
                    height: '360'
                }
            }
        },
        mounted() {
            console.log(this.video)
            this.playerOptions.sources[0].src = this.video.url
            this.playerOptions.poster = this.video.cover
            console.log('this is current player instance object')
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        props: {
            video: {
                type: Object,
                required: true
            }
        },
        components: {
            videoPlayer
        },
        methods: {
            onPlayerPlay(player) {

            },
            onPlayerPause(player) {

            },
            onPlayerEnded(player) {

            },
            onPlayerWaiting(player) {

            },
            onPlayerPlaying(player) {

            },
            onPlayerLoadeddata(player) {

            },
            onPlayerTimeupdate(player) {

            },
            onPlayerCanplay(player) {

            },
            onPlayerCanplaythrough(player) {

            },
            playerStateChanged(player) {

            },
            playerReadied() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        margin-top: 10px;
    }
</style>