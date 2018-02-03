<template>
    <div>
        <ap-title-unit-layer :title="media.title" :center="true"></ap-title-unit-layer>
        <ap-text-unit-layer :article="media.article"></ap-text-unit-layer>
    </div>
</template>

<script>
    import ApTitleUnitLayer from '../unit/ApTitleUnitLayer'
    import ApTextUnitLayer from '../unit/ApTextUnitLayer'

    export default {
        name: 'ApArticleMediaLayer',
        components: {
            ApTitleUnitLayer,
            ApTextUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'ApArticleMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>