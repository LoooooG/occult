<template>
    <div>
        <text-unit-layer :article="media.article"></text-unit-layer>
        <image-unit-layer :image="media.image"></image-unit-layer>
    </div>
</template>

<script>
    import TextUnitLayer from '../unit/TextUnitLayer'
    import ImageUnitLayer from '../unit/ImageUnitLayer'

    export default {
        name: 'ImageMediaLayer',
        components: {
            TextUnitLayer,
            ImageUnitLayer
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