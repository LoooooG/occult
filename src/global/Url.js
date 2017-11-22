let isTestServer = true

export default {
    getCommonParam() {
        return {v: 1.0, pid: 2}
    },
    urlList: Object.assign(
        {
            URL_WX_CONFIG: 'https://live.hetunlive.com/share/weixinConfig.do',
            URL_TECENT_DOWNLOAD: 'http://android.myapp.com/myapp/detail.htm?apkName=com.hetun.occult&ADTAG=mobile',
            URL_START_APP: 'hetunoccult://?type=1'
        },
        isTestServer ?
            {
                URL_RECOMMEND: 'http://mediacheck.hetunlive.com/media/content/listWebRecommend.do',
                URL_MEDIA_GET: 'https://mediacheck.hetunlive.com/media/get.do',
                URL_MEDIA_SHARE: 'http://mediacheck.hetunlive.com/media/share.do',
            } :
            {
                URL_RECOMMEND: 'http://media.hetunlive.com/media/content/listWebRecommend.do',
                URL_MEDIA_GET: 'https://media.hetunlive.com/media/get.do',
                URL_MEDIA_SHARE: 'http://media.hetunlive.com/media/share.do',
            }
    )
}