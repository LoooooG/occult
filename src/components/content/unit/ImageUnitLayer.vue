<template>
    <div class="base-margin-left-right">
        <ul class="image-container">
            <li class="solo" v-if="image.list.length === 1">
                <img :src="image.list[0].low" alt="" @click="preview(image.list[0].low)">
            </li>
            <li class="item" v-else v-for="(item, index) in image.list" :class="{'even': isEven}">
                <div v-if="index < 9" class="cover"
                     @click="preview(item.low)"
                     :style="{'background-image': 'url(' + item.low + ')'}"></div>
            </li>
            <li class="item" v-if="image.list.length == 5 || image.list.length == 8">
                <div class="cover"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'

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
        },
        methods: {
            preview(url) {
                wx.previewImage({
                    current: url, // 当前显示图片的http链接
                    urls: this.image.viewList // 需要预览的图片http链接列表
                })
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