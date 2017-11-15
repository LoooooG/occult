<template>
    <div class="container">
        <download-bar></download-bar>
        <content-layer></content-layer>
        <recommend-block></recommend-block>
    </div>
</template>

<script>
    import DownloadBar from '@/components/common/DownloadBar'
    import ContentLayer from '@/components/content/ContentLayer'
    import RecommendBlock from '@/components/common/RecommendBlock'

    export default {
        name: 'Share',
        components: {
            DownloadBar,
            ContentLayer,
            RecommendBlock
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
