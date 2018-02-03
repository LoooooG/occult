<template>
    <div>
        <ap-title-unit-layer :title="media.title" :center="true"></ap-title-unit-layer>
        <ap-audio-unit-layer :audio="media.audio" :cover="media.cover"></ap-audio-unit-layer>
        <ap-description-unit-layer :description="media.description"></ap-description-unit-layer>
    </div>
</template>

<script>
    import ApTitleUnitLayer from '../unit/ApTitleUnitLayer'
    import ApAudioUnitLayer from '../unit/ApAudioUnitLayer'
    import ApDescriptionUnitLayer from '../unit/ApDescriptionUnitLayer'

    export default {
        name: 'ApAudioMediaLayer',
        components: {
            ApTitleUnitLayer,
            ApAudioUnitLayer,
            ApDescriptionUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'ApAudioMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>