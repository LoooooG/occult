<template>
    <div class="base-margin-left-right">
        <div class="description-container">
            <div class="description-item" v-html="getDescription"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ApDescriptionUnitLayer',
        props: {
            description: {
                type: String,
                required: true
            }
        },
        computed: {
            getDescription() {
                return this.description
            }
        },
        mounted() {
            console.log(this.description, 'ApDescriptionUnitLayer')
        },
        methods: {
            getText(text) {
                return text.replace(/[\n]/g,'<br/>')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/_global";

    .description-container {
        margin-top: 10px;
        .description-item {
            font-size: 14px;
            color: $content-color-sub;
        }
    }
</style>