<template>
    <div class="almanac-container" style="display: block">
        <data-layer :date="almanac.date"></data-layer>
        <geomancy-layer :geomancy="almanac.geomancy"></geomancy-layer>
        <prediction-layer :prediction="almanac.prediction"></prediction-layer>
        <hours-layer :hours="almanac.hours"></hours-layer>
    </div>
</template>

<script>
    import Url from '@/global/Url'
    import Global from '@/global/Global'
    import Wechat from '@/global/Wechat'

    import DataLayer from '@/components/almanac/DateLayer'
    import GeomancyLayer from '@/components/almanac/GeomancyLayer'
    import PredictionLayer from '@/components/almanac/PredictionLayer'
    import HoursLayer from '@/components/almanac/HoursLayer'

    export default {
        name: 'Almanac',
        data() {
            return {
                almanac: {
                    date: {
                        alYear: '',
                        alMonth: '',
                        alDay: '',
                        weekName: '',
                        timestamp: Date.parse(new Date()),
                        previous: true,
                        next: false,
                        endDay: Date.parse(new Date("2017-01-01")),
                        startDay: Date.parse(new Date("2021-12-31"))
                    },
                    geomancy: {
                        jrbz: {},
                        jrts: [],
                        jsfw: [],
                        pzbj: [],
                        srcs: [],
                        wxbg: []
                    },
                    prediction: {
                        compatibility: "",
                        incompatibility: ""
                    },
                    hours: [
                        {
                            js: "",
                            sc: "",
                            sf: "",
                            zc: ""
                        }
                    ]
                }
            }
        },
        components: {
            DataLayer,
            GeomancyLayer,
            PredictionLayer,
            HoursLayer
        },
        created() {
            // 获取黄历详情
            this.enterAlmanac(Global.getQueryString('day') || new Date().pattern('yyyyMMdd'))
        },
        methods: {
            enterAlmanac(day) {
                Global.loading.show()
                let param = Url.getCommonParam()
                param.day = day
                this.getAlmanac(param)
            },
            getAlmanac(param) {
                this.$http.post(Url.urlList.URL_ALMANAC_GET, param).then(response => {
                    // success
                    Global.loading.hide()
                    this.almanac = response.body.data
                    this.almanac.date.previous = this.almanac.previous
                    this.almanac.date.next = this.almanac.next
                    this.almanac.date.startDay = new Date().pattern('yyyy-MM-dd', this.almanac.startDay)
                    this.almanac.date.endDay = new Date().pattern('yyyy-MM-dd', this.almanac.endDay)
                    this.setShareData(this.almanac)
                    console.log(this.almanac, 'Almanac')
                    // console.log(response)
                }).catch(response => {
                    // error
                    Global.loading.hide()
                    console.log((response.status + ': ' + response.statusText))
                    Global.messenger('暂无此日期黄历', false)
                })
            },
            setShareData(almanac) {
                let title = new Date().pattern('yyyy年MM月dd日', almanac.date.timestamp) + " " + almanac.date.alYear
                    + "年 " + almanac.date.alMonth + almanac.date.alDay + " " + almanac.date.weekName
                let link = Url.urlList.URL_ALMANAC_SHARE + new Date().pattern('yyyyMMdd', almanac.date.timestamp)
                if (Global.isDefined(Global.getQueryString('origin'))) {
                    link += '&origin=' + Global.getQueryString('origin')
                }
                let imgUrl = 'http://img.hetunlive.com/system/logo/occult/yj.jpg'
                let desc = '宜：' + almanac.prediction.compatibility + '；忌：' + almanac.prediction.incompatibility
                Wechat.getInstance().setShareData(title, link, imgUrl, desc)
            }
        }
    }
</script>

<style type="scss" scoped="">

    .almanac-container {
        max-width: 1280px;
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: hidden;
        background: #fff;
        &::-webkit-scrollbar {
            width: 0;
            height: 0
        }
    }
</style>
