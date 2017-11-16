<template>
    <div class="base-margin-left-right">
        <ul class="text-container">
            <li class="text-item" v-for="item in article.list"><div>{{item.text}}</div></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TextUnitLayer',
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/_global";

    .text-container {
        margin-top: 10px;
        .text-item {
            font-size: 14px;
            color: $content-color-sub;
        }
    }
</style>