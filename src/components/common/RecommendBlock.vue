<template>
    <div>
        <div class="header border-top border-bottom">
            <div class="title">大家都在看</div>
        </div>
        <ul class="container" v-if="getRow.length > 0">
            <li class="row" v-for="item in getRow">
                <div class="item" v-if="item.first">
                    <div class="cover" :style="{'background-image': 'url(' + item.first.cover + ')'}"></div>
                    <span class="title">{{item.first.title}}</span>
                </div>
                <div class="item" v-if="item.second">
                    <div class="cover" :style="{'background-image': 'url(' + item.second.cover + ')'}"></div>
                    <span class="title">{{item.second.title}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'RecommendBlock',
        computed: {
            getRow() {
                let row = []
                let obj = {}
                let list = this.recommend.list
                for (let i = 0; i < list.length; i++) {
                    if (i % 2 === 0) {
                        obj = {first: {}, second: {}};
                        obj.first = list[i]
                    } else {
                        obj.second = list[i]
                        row[(i - 1) / 2] = obj
                    }
                }
                return row
            },
            getImgStyle(img) {
                return { background: "url(" + img + ")"}
            }
        },
        props: {
            recommend: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value";
    @import "../../assets/css/_global";

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

    .container {
        margin-top: 15px;
        .row {
            text-align: center;
            &:not(:first-child) {
                margin-top: 10px;
            }
            .item {
                box-sizing: border-box;
                text-align: center;
                display: inline-block;
                width: 49%;
                .cover {
                    @include img-ratio-4-3;
                }
                .title {
                    @include text-ellipsis;
                    display: block;
                    font-size: 12px;
                    color: $content-color;
                    width: 100%;
                    text-align: left;
                }
                &:first-child {
                    padding-left: 10px;
                    padding-right: 5px;
                }
                &:not(:first-child) {
                    padding-left: 5px;
                    padding-right: 10px;
                }
            }
        }
    }
</style>