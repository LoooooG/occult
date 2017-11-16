<template>
    <div>
        <text-unit-layer v-if="media.article" :article="media.article"></text-unit-layer>
        <audio-unit-layer :audio="media.audio"></audio-unit-layer>
    </div>
</template>

<script>
    import TextUnitLayer from '../unit/TextUnitLayer'
    import AudioUnitLayer from '../unit/AudioUnitLayer'

    export default {
        name: 'AudioMediaLayer',
        components: {
            TextUnitLayer,
            AudioUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media);
        }
    }
</script>

<style lang="scss" scoped>

</style>