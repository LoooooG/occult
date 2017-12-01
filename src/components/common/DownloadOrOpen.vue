<script>
    import Global from '@/global/Global'
    import Url from '@/global/Url'
    import Wechat from '@/global/Wechat'

    export default {
        methods: {
            go(target, params) {
                console.log(target)
                console.log(params)
                let uri = ''
                switch (target) {
                    case 'detail':
                        uri += 'type=1'
                        break
                    case 'uploader':
                        uri += 'type=2'
                        break
                    default:
                        uri += 'type=1'
                        break
                }
                if (params) {
                    uri += '&' +  Global.json2param(params)
                }
                uri += '&contentId=' + Wechat.getInstance().getContentId()
                console.log(Url.urlList.URL_START_APP + uri)
                if (Global.isWeiXin()) {
                    location.href = Url.urlList.URL_TECENT_DOWNLOAD
                } else {
                    location.href = Url.urlList.URL_START_APP + uri
                    setTimeout(() => {
                        location.href = Url.urlList.URL_TECENT_DOWNLOAD
                    }, 250)
                    setTimeout(() => {
                        location.reload()
                    }, 1000)
                }
            }
        }
    }
</script>