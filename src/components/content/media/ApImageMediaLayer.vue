<template>
    <div>
        <ap-title-unit-layer :title="media.title" :center="true"></ap-title-unit-layer>
        <image-unit-layer :image="media.image"></image-unit-layer>
        <ap-description-unit-layer :description="media.description"></ap-description-unit-layer>
    </div>
</template>

<script>
    import ApTitleUnitLayer from '../unit/ApTitleUnitLayer'
    import ImageUnitLayer from '../unit/ImageUnitLayer'
    import ApDescriptionUnitLayer from '../unit/ApDescriptionUnitLayer'

    export default {
        name: 'ApImageMediaLayer',
        components: {
            ApTitleUnitLayer,
            ImageUnitLayer,
            ApDescriptionUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'ApImageMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>