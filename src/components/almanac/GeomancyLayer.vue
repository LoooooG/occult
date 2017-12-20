<template>
    <div class="geomancy-layer">
        <div class="geomancy-left">
            <div class="geomancy-title">今日八字</div>
            <ul class="geomancy-content-top">
                <li class="geomancy-item">{{geomancy.jrbz.nian}}</li>
                <li class="geomancy-item">{{geomancy.jrbz.yue}}</li>
                <li class="geomancy-item">{{geomancy.jrbz.ri}}</li>
            </ul>
            <div class="geomancy-title">是日冲煞</div>
            <ul class="geomancy-content-bottom">
                <li class="geomancy-item" v-for="item in geomancy.srcs">{{item}}</li>
            </ul>
        </div>
        <div class="geomancy-center">
            <div class="geomancy-label">彭祖百忌</div>
            <ul class="geomancy-poem">
                <li class="poem-item" v-for="item in geomancy.pzbj">{{item}}</li>
            </ul>
            <div class="geomancy-label">五行八卦</div>
            <ul class="geomancy-poem">
                <li class="poem-item" v-for="item in geomancy.wxbg">{{item}}</li>
            </ul>
        </div>
        <div class="geomancy-right">
            <div class="geomancy-title">吉神方位</div>
            <ul class="geomancy-content-top">
                <li class="geomancy-item"
                    :class="getJsfwItemClass"
                    v-if="index < 3"
                    v-for="(item, index) in geomancy.jsfw"
                >{{getJsfw(index)}}</li>
            </ul>
            <div class="geomancy-title">今日胎神</div>
            <ul class="geomancy-content-bottom">
                <li class="geomancy-item wrap-row-ts" v-for="item in geomancy.jrts">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GeomancyLayer',
        props: {
            geomancy: {
                type: Object,
                required: true
            }
        },
        computed: {
            getJsfwItemClass: function () {
                return {
                    'wrap-row2': this.geomancy.jsfw.length === 2,
                    'wrap-row3': this.geomancy.jsfw.length === 1
                }
            }
        },
        mounted() {
            console.log(this.geomancy, "GeomancyLayer")
        },
        methods: {
            getJsfw(row) {
                if (this.geomancy.jsfw.length <= 3) {
                    return this.geomancy.jsfw[row]
                }
                switch (row) {
                    case 0:
                        return this.geomancy.jsfw[0] + ' ' + this.geomancy.jsfw[1]
                        break
                    case 1:
                        if (this.geomancy.jsfw.length > 4) {
                            return this.geomancy.jsfw[2] + ' ' + this.geomancy.jsfw[3]
                        } else {
                            return this.geomancy.jsfw[2]
                        }
                        break
                    case 2:
                        if (this.geomancy.jsfw.length === 4) {
                            return this.geomancy.jsfw[3]
                        } else if (this.geomancy.jsfw.length === 5) {
                            return this.geomancy.jsfw[4]
                        } else if (this.geomancy.jsfw.length === 6) {
                            return this.geomancy.jsfw[4] + ' ' + this.geomancy.jsfw[5]
                        }
                        break
                    default:
                        return ""
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    @import "../../assets/css/_global.scss";

    $item-height: 24px;
    .geomancy-layer {
        border-top: 1px solid $almanac-border;
        border-bottom: 8px solid $almanac-border;
        @include flex-box;
        @include flex-wrap;
        .geomancy-left, .geomancy-right {
            width: 25%;
            box-sizing: border-box;
            @at-root .geomancy-left {
                border-right: 1px solid $almanac-border;
            }
            @at-root .geomancy-right {
                border-left: 1px solid $almanac-border;
            }
            .geomancy-title {
                background: $primary;
                font-size: nth($almanac-fs, 2);
                color: $black;
                text-align: center;
                line-height: 2.5;
            }
            .geomancy-item {
                @include single-text-ellipsis;
                font-size: nth($almanac-fs, 1);
                color: $grey;
                text-align: center;
                line-height: $item-height;
                &.wrap-row2 {
                    line-height: $item-height * 1.5;
                }
                &.wrap-row3 {
                    line-height: $item-height * 3;
                }
                &.wrap-row-ts {
                    line-height: $item-height * 2;
                }
            }
            .geomancy-content-top {
                height: $item-height * 3;
                padding: 5px 0;
            }
            .geomancy-content-bottom {
                height: $item-height * 2;
                padding: 5px 0;
            }
        }
        .geomancy-center {
            width: 50%;
            box-sizing: border-box;
            text-align: center;
            padding-top: 12px;
            .geomancy-label {
                font-size: nth($almanac-fs, 2);
                color: $grey;
                line-height: 30px;
                &:last-of-type {
                    margin-top: 20px;
                }
            }
            .geomancy-poem {
                .poem-item {
                    font-size: nth($almanac-fs, 3);
                    text-shadow: $primary 1px 1px 2px;
                    line-height: 1.8;
                    color: $black;
                }
            }
        }
    }
</style>