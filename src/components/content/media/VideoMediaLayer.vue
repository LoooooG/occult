<template>
    <div>
        <text-unit-layer v-if="media.article" :article="media.article"></text-unit-layer>
        <video-unit-layer :video="media.video"></video-unit-layer>
    </div>
</template>

<script>
    import TextUnitLayer from '../unit/TextUnitLayer'
    import VideoUnitLayer from '../unit/VideoUnitLayer'

    export default {
        name: 'VideoMediaLayer',
        components: {
            TextUnitLayer,
            VideoUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'VideoMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>