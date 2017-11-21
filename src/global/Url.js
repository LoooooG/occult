let isTestServer = true

export default {
    getCommonParam() {
        return {v: 1.0, pid: 2}
    },
    urlList: isTestServer ?
        {
            URL_WX_CONFIG: 'https://live.hetunlive.com/share/weixinConfig.do',
            URL_RECOMMEND: 'http://mediacheck.hetunlive.com/media/content/listWebRecommend.do',
            URL_MEDIA_GET: 'https://mediacheck.hetunlive.com/media/get.do',
            URL_MEDIA_SHARE: 'http://mediacheck.hetunlive.com/media/share.do',
        } :
        {
            URL_WX_CONFIG: 'https://live.hetunlive.com/share/weixinConfig.do',
            URL_RECOMMEND: 'http://media.hetunlive.com/media/content/listWebRecommend.do',
            URL_MEDIA_GET: 'https://media.hetunlive.com/media/get.do',
            URL_MEDIA_SHARE: 'http://media.hetunlive.com/media/share.do',
        }
}