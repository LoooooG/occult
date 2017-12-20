<template>
    <div class="date-layer">
        <div class="select-block">
            <label class="date-select" for="dateValue">{{getYear}}年{{getMonth}}月</label>
            <input v-model="selectDate" id="dateValue" type="date" value="">
        </div>
        <div class="switch-block clearfix">
            <div class="switch-previous" :class="{'isShow': date.previous}" @click="goPrevious"></div>
            <div class="switch-day">{{getDay}}</div>
            <div class="switch-next" :class="{'isShow': date.next}" @click="goNext"></div>
        </div>
        <div class="info-block">{{getInfo}}</div>
    </div>
</template>

<script>
    import Global from '@/global/Global'

    export default {
        name: 'DateLayer',
        data() {
            return {selectDate: ""}
        },
        props: {
            date: {
                type: Object,
                required: true
            }
        },
        computed: {
            getYear() {
                return new Date().pattern('yyyy', this.date.timestamp)
            },
            getMonth() {
                return new Date().pattern('MM', this.date.timestamp)
            },
            getDay() {
                return new Date().pattern('dd', this.date.timestamp)
            },
            getInfo() {
                return this.date.alYear + " " + this.date.alMonth + this.date.alDay + " " + this.date.weekName
            }
        },
        watch: {
            selectDate(val, oldVal) {
                this.$parent.enterAlmanac(new Date().pattern('yyyyMMdd', Date.parse(val)))
            }
        },
        mounted() {
            console.log(this.date, "DateLayer")
        },
        methods: {
            goNext() {
                if (this.date.next) {
                    this.$parent.enterAlmanac(new Date().pattern('yyyyMMdd', this.date.timestamp + 24 * 60 * 60 * 1000))
                }
            },
            goPrevious() {
                if (this.date.previous) {
                    this.$parent.enterAlmanac(new Date().pattern('yyyyMMdd', this.date.timestamp - 24 * 60 * 60 * 1000))
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_value.scss";
    @import "../../assets/css/_global.scss";

    .date-layer {
        padding: 10px 25px;
        .select-block {
            text-align: center;
            position: relative;
            .date-select {
                position: relative;
                color: $grey;
                font-size: nth($almanac-fs, 1);
                &:after {
                    @include border-arrow(4px, 1px, $grey);
                    transform: rotate(135deg);
                    top: 25%;
                    margin-left: 10px;
                }
            }
            input {
                display: block;
                position: absolute;
                left: -9999px;
            }
        }
        .switch-block {
            @include flex-box;
            @include flex-wrap;
            position: relative;
            .switch-day {
                color: $black;
                width: 60%;
                text-align: center;
                text-shadow: $primary 1px 1px 2px;
                font-size: nth($almanac-fs, 4);
                line-height: 1.4;
            }
            .switch-previous, .switch-next {
                width: 20%;
                &:before {
                    @include border-arrow(20px, 1px, $primary);
                    top: 39%;
                    display: none;
                }
                &:after {
                    @include border-arrow(20px, 1px, $black);
                    top: 38%;
                    display: none;
                }
            }
            .switch-previous {
                &:before, &:after {
                    transform: rotate(225deg);
                    left: 0;
                }
            }
            .switch-next {
                &:before, &:after {
                    transform: rotate(45deg);
                    right: 0;
                }
            }
            .switch-previous.isShow, .switch-next.isShow {
                &:before {
                    display: block;
                }
                &:after {
                    display: block;
                }
            }

        }
        .info-block {
            color: $grey;
            text-align: center;
            font-size: nth($almanac-fs, 1);
        }
    }
</style>