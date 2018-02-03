<template>
    <div class="base-margin-left-right">
        <div class="title-container" :class="getClass">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ApTitleUnitLayer',
        props: {
            title: {
                type: String,
                required: true
            },
            center: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            getClass() {
                return {
                    'pos-center': this.center
                }
            }
        },
        mounted() {
            console.log(this.title, 'ApTitleUnitLayer')
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/_global";

    .title-container {
        margin-top: 10px;
        color: #000;
        font-size: 22px;
        font-weight: bold;
        &.pos-center {
            text-align: center;
        }
    }
</style>