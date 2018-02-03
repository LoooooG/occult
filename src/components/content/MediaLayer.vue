<template>
    <div class="media-container">
        <div v-if="getType == 0" class="base-margin-left-right">加载中...</div>
        <video-media-layer
                :media="media"
                v-else-if="getType == 1">VIDEO</video-media-layer>
        <ap-video-media-layer
                :media="media"
                v-else-if="getType == 7">AP_VIDEO</ap-video-media-layer>
        <audio-media-layer
                :media="media"
                v-else-if="getType == 2">AUDIO</audio-media-layer>
        <ap-audio-media-layer
                :media="media"
                v-else-if="getType == 8">AP_AUDIO</ap-audio-media-layer>
        <image-media-layer
                :media="media"
                v-else-if="getType == 3 || getType == 6">IMAGE</image-media-layer>
        <ap-image-media-layer
                :media="media"
                v-else-if="getType == 10">IMAGE</ap-image-media-layer>
        <article-media-layer
                :media="media"
                v-else-if="getType == 4">ARTICLE</article-media-layer>
        <ap-article-media-layer
                :media="media"
                v-else-if="getType == 9">ARTICLE</ap-article-media-layer>
        <a-d-media-layer
                :media="media"
                v-else-if="getType == 5">AD</a-d-media-layer>
    </div>
</template>

<script>
    import Global from '@/global/Global'
    import VideoMediaLayer from './media/VideoMediaLayer'
    import AudioMediaLayer from './media/AudioMediaLayer'
    import ImageMediaLayer from './media/ImageMediaLayer'
    import ADMediaLayer from './media/ADMediaLayer'
    import ArticleMediaLayer from './media/ArticleMediaLayer'
    import ApVideoMediaLayer from './media/ApVideoMediaLayer'
    import ApAudioMediaLayer from './media/ApAudioMediaLayer'
    import ApImageMediaLayer from './media/ApImageMediaLayer'
    import ApArticleMediaLayer from './media/ApArticleMediaLayer'

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
            ADMediaLayer,
            ApVideoMediaLayer,
            ApAudioMediaLayer,
            ApImageMediaLayer,
            ApArticleMediaLayer
        }
    }
</script>

<style lang="scss" scoped>
    .media-container {

    }
</style>