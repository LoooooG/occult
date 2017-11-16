<template>
    <div class="base-margin-left-right">
        <ul class="image-container">
            <li class="solo" v-if="image.list.length === 1">
                <img :src="image.list[0].low" alt="">
            </li>
            <li class="item" v-for="(item, index) in image.list" :class="{'even': isEven}">
                <div v-if="index < 9" class="cover" :style="{'background-image': 'url(' + item.low + ')'}"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ImageUnitLayer',
        props: {
            image: {
                type: Object,
                required: true
            }
        },
        computed: {
            isEven() {
                return this.image.list.length === 2 || this.image.list.length === 4
            }
        },
        mounted() {
            this.image.viewList = []
            for (let index in this.image.list) {
                this.image.viewList.push(this.image.list[index].low)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/_global";

    .image-container {
        @include flex-box;
        @include flex-wrap;
        justify-content: space-between;
        margin-top: 5px;
        .item {
            margin-top: 3px;
            width: 32.5%;
            .cover {
                @include img-ratio-1-1;
            }
            &.even {
                width: 49.2%;
            }
        }
        .solo {
            img {
                width: 100%;
            }
        }
    }
</style>