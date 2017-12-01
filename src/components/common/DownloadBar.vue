<template>
    <div class="download_box" @click="go('detail')">
        <img src="../../assets/img/banner.png" alt="">
    </div>
</template>

<script>
    import DownloadOrOpen from '@/components/common/DownloadOrOpen'
    export default {
        name: 'DownloadBar',
        data() {
            return {msg: 'DownloadBar'}
        },
        mixins: [DownloadOrOpen]
    }
</script>

<style lang="scss" scoped>
    .download_box {
        img {
            width: 100%;
            height: auto;
        }
    }
</style>