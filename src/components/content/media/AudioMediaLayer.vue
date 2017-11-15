<template>

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