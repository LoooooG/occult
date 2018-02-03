<template>
    <div>
        <video-unit-layer :video="media.video"></video-unit-layer>
        <ap-title-unit-layer :title="media.title" :center="false"></ap-title-unit-layer>
        <ap-description-unit-layer :description="media.description"></ap-description-unit-layer>
    </div>
</template>

<script>
    import VideoUnitLayer from '../unit/VideoUnitLayer'
    import ApTitleUnitLayer from '../unit/ApTitleUnitLayer'
    import ApDescriptionUnitLayer from '../unit/ApDescriptionUnitLayer'

    export default {
        name: 'ApVideoMediaLayer',
        components: {
            VideoUnitLayer,
            ApTitleUnitLayer,
            ApDescriptionUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'ApVideoMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>