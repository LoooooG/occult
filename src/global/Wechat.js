import Global from '@/global/Global'
import wx from 'weixin-js-sdk'

export default class Wechat {
    static _instance

    static getInstance() {
        if (!Wechat._instance || !Wechat._instance instanceof Wechat) {
            Wechat._instance = new Wechat()
        }
        return Wechat._instance
    }

    share = {
        title: '鬼知道 - 探索未知世界',
        link: 'http://www.hetunlive.com/occult/index.html#/',
        imgUrl: '',
        desc: ''
    }

    constructor() {

    }

    config(config) {
        wx.config(config)
        wx.ready(() => {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
            // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
            // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            this.onMenuShareAppMessage();
            this.onMenuShareTimeline();
            this.onMenuShareQQ();
            this.onMenuShareQZone();
            this.onMenuShareWeibo();
        })
    }

    /**
     * 设置分享数据
     * @param title 分享标题
     * @param link 分享链接
     * @param imgUrl 分享logo
     * @param desc 分享描述
     */
    setShareData(title, link, imgUrl, desc) {
        this.share.title = title;
        this.share.link = link;
        this.share.imgUrl = imgUrl;
        this.share.desc = desc;
        this.onMenuShareAppMessage();
        this.onMenuShareTimeline();
        this.onMenuShareQQ();
        this.onMenuShareQZone();
        this.onMenuShareWeibo();
    }


    /**
     * 微信分享链接到朋友圈
     */
    onMenuShareTimeline() {
        wx.onMenuShareTimeline({
            title: this.share.title, // 分享标题
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            success: function () {
                Global.messenger('分享成功', true);
            },
            fail: function () {
                Global.messenger('分享失败，请稍候再试', false);
            },
            cancel: function () {
                Global.messenger('取消分享', false);
            }
        });
    }

    /**
     * 微信分享链接给好友
     */
    onMenuShareAppMessage() {
        wx.onMenuShareAppMessage({
            title: this.share.title, // 分享标题
            desc: this.share.desc, // 分享描述
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                Global.messenger('发送成功', true);
            },
            fail: function () {
                Global.messenger('发送失败，请稍候再试', false);
            },
            cancel: function () {
                Global.messenger('取消发送', false);
            }
        });
    }

    /**
     * 分享到QQ
     */
    onMenuShareQQ() {
        wx.onMenuShareQQ({
            title: this.share.title, // 分享标题
            desc: this.share.desc, // 分享描述
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            success: function () {
                Global.messenger('分享成功', true);
            },
            fail: function () {
                Global.messenger('分享失败，请稍候再试', false);
            },
            cancel: function () {
                Global.messenger('取消分享', false);
            }
        });
    }

    /**
     * 分享到微博
     */
    onMenuShareWeibo() {
        wx.onMenuShareWeibo({
            title: this.share.title, // 分享标题
            desc: this.share.desc, // 分享描述
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            success: function () {
                Global.messenger('分享成功', true);
            },
            fail: function () {
                Global.messenger('分享失败，请稍候再试', false);
            },
            cancel: function () {
                Global.messenger('取消分享', false);
            }
        });
    }

    /**
     * 分享到QQ空间
     */
    onMenuShareQZone() {
        wx.onMenuShareQZone({
            title: this.share.title, // 分享标题
            desc: this.share.desc, // 分享描述
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            success: function () {
                Global.messenger('分享成功', true);
            },
            fail: function () {
                Global.messenger('分享失败，请稍候再试', false);
            },
            cancel: function () {
                Global.messenger('取消分享', false);
            }
        });
    }

}