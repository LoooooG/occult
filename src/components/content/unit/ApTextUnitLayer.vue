<template>
    <div class="base-margin-left-right">
        <ul class="text-container">
            <li class="text-item" v-for="item in article.list"><div v-html="getText(item.text)"></div></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ApTextUnitLayer',
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.article, 'ApTextUnitLayer')
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

    .text-container {
        margin-top: 10px;
        .text-item {
            font-size: 16px;
            color: $content-color-sub;
        }
    }
</style>