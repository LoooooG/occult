<template>
    <div class="media-container">
        <div v-if="getType == 0" class="base-margin-left-right">加载中...</div>
        <video-media-layer
                :media="media"
                v-else-if="getType == 1">VIDEO</video-media-layer>
        <audio-media-layer
                :media="media"
                v-else-if="getType == 2">AUDIO</audio-media-layer>
        <image-media-layer
                :media="media"
                v-else-if="getType == 3">IMAGE</image-media-layer>
        <article-media-layer
                :media="media"
                v-else-if="getType == 4">ARTICLE</article-media-layer>
        <a-d-media-layer
                :media="media"
                v-else="getType == 5">AD</a-d-media-layer>
    </div>
</template>

<script>
    import Global from '@/global/Global'
    import VideoMediaLayer from './media/VideoMediaLayer'
    import AudioMediaLayer from './media/AudioMediaLayer'
    import ImageMediaLayer from './media/ImageMediaLayer'
    import ArticleMediaLayer from './media/ArticleMediaLayer'
    import ADMediaLayer from './media/ADMediaLayer'

    export default {
        name: 'MediaLayer',
        computed: {
            getType() {
                return this.media.type
            }
        },
        props: {
            media: {
                type: Object
            }
        },
        components: {
            VideoMediaLayer,
            AudioMediaLayer,
            ImageMediaLayer,
            ArticleMediaLayer,
            ADMediaLayer
        }
    }
</script>

<style lang="scss" scoped>
    .media-container {

    }
</style>