<template>
    <div class="audio-container base-margin-left-right">
        <audio id="audio" :src="audio.url"
               @play="play"
               @pause="pause"
               @canplay="canPlay"
               @timeupdate="timeupdate">该设备不支持音频</audio>
        <div class="player-box">
            <div class="cover-box">
                <div class="cover-block">
                    <div class="cover-inner">
                        <div class="cover Rotation" :class="getAnimationSate" :style="{ background: 'url('+ cover.thumbnail +') center'}"></div>
                        <div class="btn" @click="togglePlayer"><img :src="btn" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="progress-box">
                <div class="time-mark current">{{current}}</div>
                <progress id="progress" value="0" max="100"></progress>
                <div class="time-mark max">{{duration}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import PlayBtn from '../../../assets/img/audio_play.png'
    import PauseBtn from '../../../assets/img/audio_pause.png'
    let player, progress

    export default {
        name: 'ApAudioUnitLayer',
        data() {
            return {
                duration: '00:00',
                current: '00:00',
                btn: PlayBtn
            }
        },
        props: {
            audio: {
                type: Object,
                required: true
            },
            cover: {
                type: Object,
                required: true
            }
        },
        computed: {
            getAnimationSate() {
                return {
                    'state-paused': this.btn === PlayBtn,
                    'state-running': this.btn === PauseBtn
                }
            }
        },
        mounted() {
            player = document.querySelector('audio')
            progress = document.querySelector('progress')
            console.log(this.audio, 'ApAudioUnitLayer')
        },
        methods: {
            togglePlayer: function () {
                if (this.btn === PlayBtn) {
                    player.play()
                } else if (this.btn === PauseBtn) {
                    player.pause()
                }
            },
            canPlay() {
                progress.max = Number.parseInt(player.duration)
                this.duration = Number.parseInt(player.duration).formatTime()
                this.current = '00:00'
            },
            play() {
                this.btn = PauseBtn
            },
            pause() {
                this.btn = PlayBtn
            },
            timeupdate() {
                progress.value = Number.parseInt(player.currentTime)
                this.current = Number.parseInt(player.currentTime).formatTime()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/_value";
    @import "../../../assets/css/_global";

    $audio-box-height: 30px;
    $audio-btn: 40px;
    $progress-height: 4px;
    .audio-container {
        margin-top: 10px;
        .player-box {
            margin: 0 15px;
            .cover-box {
                position: relative;
                height: $cover-side;
                .cover-block {
                    position: absolute;
                    left: 50%;
                    .cover-inner {
                        position: relative;
                        left: -50%;
                        width: $cover-side;
                        height: $cover-side;
                        .cover {
                            animation-fill-mode: forwards;
                            position: relative;
                            border-radius: 50%;
                            width: 100%;
                            height: 100%;
                        }
                        .btn {
                            position: absolute;
                            left: $cover-side / 2 - $audio-btn / 2;
                            top: $cover-side / 2 - $audio-btn / 2;
                            width: $audio-btn;
                            height: $audio-btn;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .progress-box {
                @include flex-box;
                align-items: center;
                position: relative;
                width: 100%;
                height: auto;
                margin-top: 10px;
                progress {
                    &::-webkit-progress-inner-element {
                        border-radius: $progress-height / 2;
                    }
                    &::-webkit-progress-value {
                        border-radius: $progress-height / 2;
                    }
                    &::-webkit-progress-bar {
                        border-radius: $progress-height / 2;
                    }
                    &::-moz-progress-bar {
                        background: $primary;
                    }
                    &::-webkit-progress-bar {
                        background: #979797;
                    }
                    &::-webkit-progress-value {
                        background: $primary;
                    }
                    flex: 1;
                    background-color: $primary;
                    border: 0 solid;
                    border-radius: $progress-height / 2;
                    height: $progress-height;
                    color: $primary;
                }
                .time-mark {
                    @include scale-ratio(.9);
                    margin: 0 10px;
                    color: #666;
                    opacity: .5;
                    font-size: 10px;
                }
            }
        }
    }
    @-webkit-keyframes rotation {
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .Rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 10s linear infinite;
        -moz-animation: rotation 10s linear infinite;
        -webkit-animation: rotation 10s linear infinite;
        -o-animation: rotation 10s linear infinite;
    }
    .state-paused {
        animation-play-state: paused;
    }
    .state-running {
        animation-play-state: running;
    }
</style>