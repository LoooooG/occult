<script>
    import Global from '@/global/Global'
    import Url from '@/global/Url'

    export default {
        methods: {
            go() {
                if (Global.isWeiXin()) {
                    location.href = Url.urlList.URL_TECENT_DOWNLOAD
                } else {
                    location.href = Url.urlList.URL_START_APP
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