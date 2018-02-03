<template>
    <div class="audio-container base-margin-left-right">
        <audio id="audio" :src="audio.url"
               @play="play"
               @pause="pause"
               @canplay="canPlay"
               @timeupdate="timeupdate">该设备不支持音频</audio>
        <div class="player-box">
            <div class="btn" @click="togglePlayer"><img :src="btn" alt=""></div>
            <div class="time-mark current">{{current}}</div>
            <progress id="progress" value="0" max="100"></progress>
            <div class="time-mark max">{{duration}}</div>
        </div>
    </div>
</template>

<script>
    import PlayBtn from '../../../assets/img/audio_play.png'
    import PauseBtn from '../../../assets/img/audio_pause.png'
    let player, progress;

    export default {
        name: 'AudioUnitLayer',
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
            }
        },
        mounted() {
            player = document.querySelector('audio')
            progress = document.querySelector('progress')
            console.log(this.audio, 'AudioUnitLayer')
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

    $audio-box-height: 50px;
    $audio-btn: 40px;
    $progress-height: 4px;
    .audio-container {
        margin-top: 10px;
        .player-box {
            @include flex-box;
            align-items: center;
            position: relative;
            width: 100%;
            height: $audio-box-height;
            line-height: $audio-box-height;
            border-radius: $audio-box-height / 2;
            background: rgba(0, 0, 0, .08);
            .btn {
                margin-left: ($audio-box-height - $audio-btn) / 2;
                width: $audio-btn;
                height: $audio-btn;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
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
                margin: 0 ($audio-box-height - $audio-btn) / 2;
                color: #666;
                opacity: .5;
                font-size: 10px;
            }
        }
    }
</style>