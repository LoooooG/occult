<template>
    <text-unit-layer :article="media.article"></text-unit-layer>
</template>

<script>
    import TextUnitLayer from '../unit/TextUnitLayer'

    export default {
        name: 'ArticleMediaLayer',
        components: {
            TextUnitLayer
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media, 'ArticleMediaLayer')
        }
    }
</script>

<style lang="scss" scoped>

</style>