<template>
    <div class="hours-layer">
        <div class="hours-title">
            <div class="col-sc">时辰</div>
            <div class="col-sf">煞方</div>
            <div class="col-zc">正冲</div>
            <div class="col-js">吉神</div>
        </div>
        <ul class="hours-list">
            <li class="hours-row" v-for="item in hours">
                <div class="col-sc">{{item.sc}}</div>
                <div class="col-sf">{{item.sf}}</div>
                <div class="col-zc">{{item.zc}}</div>
                <div class="col-js">{{item.js}}</div>
            </li>
        </ul>
        <div class="qrcode-layer">
            <img src="../../assets/img/qrcode_almanac.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HoursLayer',
        props: {
            hours: {
                type: Array,
                required: true
            }
        },
        computed: {
        },
        mounted() {
            console.log(this.hours, "HoursLayer")
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    @import "../../assets/css/_global.scss";

    .hours-layer {
        .hours-title {
            @include flex-box;
            @include flex-wrap;
            div {
                background: rgba(255, 214, 48, .3);
                text-align: center;
                line-height: 2.5;
                font-size: nth($almanac-fs, 2);
                color: $black;
                &:not(:first-child) {
                    border-left: 1px solid #fff;
                }
            }
        }
        .hours-list {
            .hours-row {
                @include flex-box;
                @include flex-wrap;
                &:nth-child(even) {
                    background: rgba(255, 214, 48, .1);
                }
            }
        }
        .col-sc, .col-sf, .col-zc, .col-js {
            @include single-text-ellipsis;
            box-sizing: border-box;
            font-size: nth($almanac-fs, 1);
            color: $grey;
            text-align: center;
            line-height: 3;
        }
        .col-sc, .col-sf, .col-zc {
            width: 20%;
        }
        .col-js {
            width: 40%;
        }
        .qrcode-layer {
            margin: 20px 40px;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
</style>