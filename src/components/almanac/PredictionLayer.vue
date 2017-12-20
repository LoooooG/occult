<template>
    <div class="prediction-layer">
        <div class="pre-row">
            <div class="pre-icon"><div class="pre-icon-inner">宜</div></div>
            <div class="pre-content">{{prediction.compatibility}}</div>
        </div>
        <div class="pre-row">
            <div class="pre-icon"><div class="pre-icon-inner">忌</div></div>
            <div class="pre-content">{{prediction.incompatibility}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PredictionLayer',
        props: {
            prediction: {
                type: Object,
                required: true
            }
        },
        computed: {
        },
        mounted() {
            console.log(this.prediction, "PredictionLayer")
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    @import "../../assets/css/_global.scss";

    $icon-wrap: 15%;
    .prediction-layer {
        border-bottom: 8px solid $almanac-border;
        padding: 15px 10px;
        .pre-row {
            @include flex-box;
            @include flex-wrap;
            &:last-of-type {
                margin-top: 10px;
            }
            .pre-icon {
                width: $icon-wrap;
                .pre-icon-inner {
                    margin-left: 10px;
                    border-radius: 10px;
                    font-size: nth($almanac-fs, 1);
                    background: #5f9bff;
                    color: #fff;
                    text-align: center;
                    padding-top: 1px;
                    width: 30px;
                    height: 19px;
                    display: inline-block;
                }
                @at-root .prediction-layer .pre-row:last-of-type .pre-icon-inner {
                    background: #ff5e5f;
                }
            }
            .pre-content {
                margin-top: 5px;
                width: 100% - $icon-wrap;
                font-size: nth($almanac-fs, 1);
                color: $grey;
            }
        }
    }
</style>