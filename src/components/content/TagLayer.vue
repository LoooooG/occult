<template>
    <ul class="tag-container base-margin-left-right" v-if="contentTag.list && contentTag.list.length > 0">
        <li class="tag-item" v-for="tag in contentTag.list">{{tag.name}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'TagLayer',
        props: {
            contentTag: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value";

    $item-height: 20px;
    .tag-container {
        margin-top: 15px;
        .tag-item {
            padding: 0 10px;
            display: inline-block;
            line-height: $item-height;
            background: $primary;
            font-size: 10px;
            color: $content-color-sub;
            border-radius: $item-height / 2;
            margin-right: 10px;
        }
    }
</style>