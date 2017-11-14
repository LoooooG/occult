<template>
    <div class="download_box" @click="go">
        <img src="../../assets/img/banner.png" alt="">
    </div>
</template>

<script>
    import DownloadOrOpen from '@/components/DownloadOrOpen';
    export default {
        name: 'DownloadBar',
        data() {
            return {msg: 'DownloadBar'}
        },
        mixins: [DownloadOrOpen],
        methods: {
            goDownload() {
                console.log(123);
            }
        }
    }
</script>

<style scoped>
    .download_box {
        width: 100%;
        min-height: 40px;
        background: coral;
    }

    .download_box img {
        width: 100%;
        height: auto;
    }
</style>