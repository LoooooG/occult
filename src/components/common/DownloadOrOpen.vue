<script>
    import Url from '@/global/Url'

    export default {
        methods: {
            go() {
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
</script>