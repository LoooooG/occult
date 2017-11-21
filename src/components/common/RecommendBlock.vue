<template>
    <div>
        <div class="header border-top border-bottom">
            <div class="title">大家都在看</div>
        </div>
        <ul class="list-container" v-if="recommend.list.length > 0">
            <li class="item" v-for="item in recommend.list" @click="go">
                <div class="cover" :style="{'background-image': 'url(' + item.cover + ')'}"></div>
                <span class="title">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import DownloadOrOpen from '@/components/common/DownloadOrOpen'
    import Url from '@/global/Url'
    import Global from '@/global/Global'

    export default {
        name: 'RecommendBlock',
        data() {
            return {
                recommend: {
                    "list": [
                        {
                            "cover": "http://img.check.hetunlive.com/content/cover/367e24c09dc54cf783d22170f5cc5505.jpg",
                            "title": "谢谢！"
                        },
                        {
                            "cover": "http://img.check.hetunlive.com/content/cover/3a3836424b9d484ab757e0abf80d3627.jpg",
                            "title": "别人家养的棉花糖，大概是成精后的猪妖"
                        },
                        {
                            "cover": "http://img.check.hetunlive.com/videoclips/operateUser/d180eb450497426da32e5ec3bd93de96.png",
                            "title": "贫穷限制了我的想像力"
                        },
                        {
                            "cover": "http://img.check.hetunlive.com/content/cover/d6987239e7f941aaa2c87c46677108fc.jpg",
                            "title": "你开心就好"
                        }
                    ]
                }
            }
        },
        mixins: [DownloadOrOpen],
        created() {
            // 获取大家都在看内容
            this.$http.post(Url.urlList.URL_RECOMMEND, {}).then(response => {
                this.recommend = response.body.data.recommend
            }).catch(response => {
                console.log(response);
            })
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

    .list-container {
        margin: 0px 10px 0;
        @include flex-box;
        @include flex-wrap;
        justify-content: space-between;
        .item {
            margin-top: 15px;
            width: 49%;
            .cover {
                @include img-ratio-4-3;
            }
            .title {
                @include single-text-ellipsis;
                display: block;
                font-size: 12px;
                color: $content-color;
                width: 100%;
                text-align: left;
            }
        }
    }
</style>