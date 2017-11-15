<template>

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
            console.log(this.media);
        }
    }
</script>

<style lang="scss" scoped>

</style>