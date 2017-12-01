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

    contentId = 608
    debug = false
    jsApiList = [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getLocation'
    ]
    share = {
        title: '鬼知道 - 探索未知世界',
        link: 'http://cdn.hetunlive.com/share/media/index.html#/',
        imgUrl: 'http://img.check.hetunlive.com/videoclips/operateUser/ed96d707a726463ab9090b33d60958e7.jpg',
        desc: '邀请你来观看一篇神奇的帖子!胆小慎入！',
        type: 'link',
        dataUrl: ''
    }

    constructor() {

    }

    config(config) {
        config.debug = this.debug
        config.jsApiList = this.jsApiList
        wx.config(config)
        wx.ready(() => {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
            // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
            // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            this.initOnMenuShare()
        })
    }

    setContentId(id) {
        this.contentId = id
    }

    getContentId() {
        return this.contentId
    }

    /**
     * 设置分享数据
     * @param title 分享标题
     * @param link 分享链接
     * @param imgUrl 分享logo
     * @param desc 分享描述
     * @param type 分享类型,music、video或link，不填默认为link
     * @param dataUrl 如果type是music或video，则要提供数据链接，默认为空
     */
    setShareData(title, link, imgUrl, desc, type = 'link', dataUrl = '') {
        this.share.title = title
        this.share.link = link
        this.share.imgUrl = imgUrl
        this.share.desc = desc
        // this.share.type = type
        // this.share.dataUrl = dataUrl
        this.initOnMenuShare()
    }

    /**
     * 初始化分享数据
     */
    initOnMenuShare() {
        this.onMenuShareAppMessage()
        this.onMenuShareTimeline()
        this.onMenuShareQQ()
        this.onMenuShareQZone()
        this.onMenuShareWeibo()
    }


    /**
     * 微信分享链接到朋友圈
     */
    onMenuShareTimeline() {
        wx.onMenuShareTimeline({
            title: this.share.title, // 分享标题
            link: this.share.link, // 分享链接
            imgUrl: this.share.imgUrl, // 分享图标
            success() {
                Global.messenger('分享成功', true)
            },
            fail() {
                Global.messenger('分享失败，请稍候再试', false)
            },
            cancel() {
                Global.messenger('取消分享', false)
            }
        })
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
            type: this.share.type, // 分享类型,music、video或link，不填默认为link
            dataUrl: this.share.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
            success() {
                Global.messenger('发送成功', true)
            },
            fail() {
                Global.messenger('发送失败，请稍候再试', false)
            },
            cancel() {
                Global.messenger('取消发送', false)
            }
        })
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
            success() {
                Global.messenger('分享成功', true)
            },
            fail() {
                Global.messenger('分享失败，请稍候再试', false)
            },
            cancel() {
                Global.messenger('取消分享', false)
            }
        })
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
            success() {
                Global.messenger('分享成功', true)
            },
            fail() {
                Global.messenger('分享失败，请稍候再试', false)
            },
            cancel() {
                Global.messenger('取消分享', false)
            }
        })
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
            success() {
                Global.messenger('分享成功', true)
            },
            fail() {
                Global.messenger('分享失败，请稍候再试', false)
            },
            cancel() {
                Global.messenger('取消分享', false)
            }
        })
    }

    /**
     * 拍照或从手机相册中选图接口
     * @param callback 回调函数
     */
    chooseImage(callback) {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                if (res.errMsg === 'chooseImage:ok') {
                    let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    $.isFunction(callback) && callback(localIds)
                }
            }
        })
    }

    /**
     * 预览图片接口
     * @param {String} src 当前显示图片的http链接
     * @param {Array} urls 需要预览的图片http链接列表
     */
    previewImage(src, urls) {
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        })
    }

    /**
     * 上传图片接口
     * @param id 需要上传的图片的本地ID
     * @param callback 回调函数
     */
    uploadImage(id, callback) {
        wx.uploadImage({
            localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success(res) {
                let serverId = res.serverId // 返回图片的服务器端ID
                $.isFunction(callback) && callback(id, serverId)
            }
        })
    }

    /**
     * 下载图片接口
     * @param id 需要下载的图片的服务器端ID
     * @param callback 回调函数
     */
    downloadImage(id, callback) {
        wx.downloadImage({
            serverId: id, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success(res) {
                let localId = res.localId // 返回图片下载后的本地ID
                $.isFunction(callback) && callback(localId)
            },
            fail(res) {
                messenger('图片已过期', false, 1000)
                loading.hide()
            }
        })
    }

    /**
     * 获取地理位置接口
     * @param callback 回调函数
     */
    getLocation(callback) {
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success(res) {
                let latitude = res.latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude = res.longitude, // 经度，浮点数，范围为180 ~ -180。
                    speed = res.speed, // 速度，以米/每秒计
                    accuracy = res.accuracy // 位置精度
                $.isFunction(callback) && callback(res)
            }
        })
    }

    /**
     * 获取地理位置详情
     * @param longitude 经度
     * @param latitude 纬度
     */
    getLocationDetail(longitude, latitude) {
        let data = {location: latitude + "," + longitude, key: "ZBGBZ-KPMWU-6LCV4-4GGN6-NRLKE-BIB42", get_poi: 0}
        let url = "http://apis.map.qq.com/ws/geocoder/v1/?"
        data.output = "jsonp"
        $.ajax({
            type: "get",
            dataType: 'jsonp',
            data: data,
            jsonp: "callback",
            jsonpCallback: "QQmap",
            url: url,
            success(data) {
                let location = data.result.address_component
                g('nation', location.nation)
                g('province', location.province)
                g('city', location.city)
                g('district', location.district)
                g('street', location.street)
                g('street_number', location.street_number)
                GFlush()
            },
            error(err) {
                alertDialog('获取地址位置信息失败')
            }

        })
    }

    /**
     * 开始录音接口
     */
    startRecord() {
        wx.startRecord()
    }

    /**
     * 监听录音自动停止接口
     * @param callback 回调方法
     */
    onVoiceRecordEnd(callback) {
        wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete(res) {
                var localId = res.localId
                $.isFunction(callback) && callback(localId)
            }
        })
    }

    /**
     * 停止录音接口
     * @param [callback] 回调方法 (localId, isCancel)
     */
    stopRecord(callback) {
        wx.stopRecord({
            success(res) {
                if (res.errMsg == 'stopRecord:ok') {
                    var localId = res.localId
                    $.isFunction(callback) && callback(localId)
                }
            }
        })
    }

    /**
     * 播放语音接口
     */
    playVoice(localId) {
        wx.playVoice({
            localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
        })
    }

    /**
     * 停止播放接口
     */
    stopVoice(localId) {
        wx.stopVoice({
            localId: localId // 需要停止的音频的本地ID，由stopRecord接口获得
        })
    }

    /**
     * 监听语音播放完毕接口
     * @param callback 回调函数
     */
    onVoicePlayEnd(callback) {
        wx.onVoicePlayEnd({
            success(res) {
                var localId = res.localId // 返回音频的本地ID
                $.isFunction(callback) && callback(localId)
            }
        })
    }

    /**
     * 上传语音接口
     * @param id 需要上传的音频的本地ID
     * @param callback 回调函数
     */
    uploadVoice(id, callback) {
        wx.uploadVoice({
            localId: id, // 需要上传的音频的本地ID，由stopRecord接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success(res) {
                let serverId = res.serverId // 返回音频的服务器端ID
                $.isFunction(callback) && callback(id, serverId)
            }
        })
    }

    /**
     * 下载语音接口
     * @param id 需要下载的音频的服务器端ID
     * @param callback 回调函数
     */
    downloadVoice(id, callback) {
        wx.downloadVoice({
            serverId: id, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success(res) {
                let localId = res.localId // 返回音频的本地ID
                $.isFunction(callback) && callback(localId)
            },
            fail(res) {
                messenger('语音已过期', false, 1000)
                Global.loading.hide()
            }
        })
    }

    /**
     * 微信选择卡卷
     */
    chooseCard() {
        this.callInterface(INTERFACE_GET_CARD_SIGN, {}, (data) => { // 调用接口获取卡卷签名
            wx.chooseCard({
                shopId: '', // 门店Id
                cardType: data.cardType, // 卡券类型
                cardId: '', // 卡券Id
                timestamp: data.timestamp, // 卡券签名时间戳
                nonceStr: data.nonceStr, // 卡券签名随机串
                signType: data.signType, // 签名方式，默认'SHA1'
                cardSign: data.cardSign, // 卡券签名
                success(res) {
                    var cardList = res.cardList // 用户选中的卡券列表信息
                    var card = JSON.parse(cardList)[0]
                    this.getCard(card.card_id, card.encrypt_code)
                }
            })
        })
    }

    /**
     * 获取卡卷信息
     */
    getCard(card_id, encrypt_code) {
        this.callInterface(INTERFACE_GET_CARD, {'card_id': card_id}, (data) => {
            var total = Cart.cartData.total
            if (total * 100 >= data.card.cash.least_cost) {
                /** 订单满足卡卷使用要求 **/
                Api.param.encrypt_code = encrypt_code // 增加下单参数: 卡卷加密CODE,用以换取核销CODE
                Api.param.discount = data.card.cash.reduce_cost / 100 // 增加下单参数: 折扣额度
                Api.param.title = data.card.cash.base_info.title // 增加下单参数: 优惠标题描述
                Api.param.card_id = card_id // 增加下单参数: 卡卷ID代表一类卡卷
                $("#total").html('¥' + (total - data.card.cash.reduce_cost / 100)) // 订单总价UI变化
                $("#total").css('color', '#379d03') // 订单总价UI变化
                $("#card_selected .col-xs-8 b").html(data.card.cash.base_info.title) // 卡卷标题内容赋值
                $("#card_selected .col-xs-2 b").html('¥' + data.card.cash.reduce_cost / 100) // 卡卷优惠价格赋值
                $("#card_selected").show().siblings('div').hide() // "用户所选择卡卷"显示,"点击选择微信卡卷"隐藏
            } else {
                /** 订单不满足卡卷使用要求 **/
                $("#card_selected").hide().siblings('div').show() // "用户所选择卡卷"隐藏,"点击选择微信卡卷"显示
                delete Api.param.encrypt_code // 删除下单参数
                delete Api.param.discount // 删除下单参数
                delete Api.param.title // 删除下单参数
                delete Api.param.card_id // 删除下单参数
                $("#total").html('¥' + total) // 订单总价UI还原
                $("#total").css('color', '#ff0000') // 订单总价UI还原
                messenger('未达到该优惠卷的使用条件', true)
            }
        })
    }

    /**
     * 卡卷查询
     * @param code 卡卷加密code
     * @param card_id 卡卷id
     */
    checkCode(code, card_id) {
        var self = this
        this.callInterface(INTERFACE_CHECK_CODE, {
            sn: g('osn'),
            uid: g('uid'),
            code: code,
            card_id: card_id
        }, (data) => {
            if (data.can_consume) { // 卡卷正常, 可以核销
                self.pay(Api.param.discount)
            } else {
                delete Order.data.data[0].activity // 删除订单详情中的优惠信息
                delete Api.param.code // 删除卡卷code
                Order.renew = true
                Order.append()
                if (confirm('该卡卷无效, 是否继续支付')) {
                    self.pay(0)
                }
            }
        })
    }

    /**
     * 核销卡卷
     */
    consumeCode(code) {
        this.callInterface(INTERFACE_CONSUME_CODE, {code: code}, (data) => {
            Global.messenger('支付成功, 卡卷已核销', true);
        });
    }

    /**
     *
     * @param discount
     */
    pay(discount) {
        this.callInterface(INTERFACE_WX_PAY, {
            openid: g("openid"),
            uid: g("uid"),
            o_sn: g("osn"),
            sid: Order.data.data[0].s_id,
            goods: Order.data.data[0].goods,
            o_total: Order.data.data[0].o_total - discount
        }, (data) => {
            let jsApiParameters = JSON.parse(data.param);
            this.callPay(jsApiParameters);
        });
    }

    /**
     * 微信JS api检测
     * @param obj
     * @param [callback] 回调方法
     */
    callPay(obj, callback) {
        if (typeof WeixinJSBridge === undefined) {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
                document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
            }
        } else {
            this.jsApiCall(obj, callback);
        }
    }

    /**
     * 调用微信JS api 支付
     * @param obj
     * @param [callback] 回调方法
     */
    jsApiCall(obj, callback) {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            obj,
            (res) => {
                if (res.err_msg === "get_brand_wcpay_request:ok") {
                    Global.messenger('支付成功', true);
                    $.isFunction(callback) && callback(true);
                } else if (res.err_msg === "get_brand_wcpay_request:cancel") {
                    Global.messenger('取消支付', false);
                } else {
                    Global.messenger('支付失败, 请稍候再试', false);
                    $.isFunction(callback) && callback(false);
                }
                //alert('code:' + res.err_code + ', desc:' + res.err_desc + ', msg:' + res.err_msg);
            }
        )
    }
}