<template>
    <div>
        <div class="header border-top border-bottom">
            <div class="title">大家都在看</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecommendBlock',
        data() {
            return {msg: ''}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    .header {
        padding: 12px 0;
        .title {
            font-size: $content-font;
            color: $content-color;
            font-weight: normal;
            padding-left: 20px;
            position: relative;
        }
        :before {
            content: " ";
            position: absolute;
            left: 0;
            width: 4px;
            height: 100%;
            background: #ff7602;
        }
    }
</style>