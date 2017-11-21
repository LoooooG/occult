const browser = {
// browser version type
    versions: function () {
        let u = navigator.userAgent, app = navigator.appVersion;
        return {
//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, // 是否iPad
            webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
            isMyApp: u.indexOf('PerfectDoctor') > -1, // 是否完美医生APP
            weixin: u.toLowerCase().match(/MicroMessenger/i) == "micromessenger"  //是否微信浏览器
        }
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

/**
 * 扩展对象(重写原属性或方法)
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    let keys = Object.keys(src),
        i = 0
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]]
        }
        i++
    }
    return dest
}

/**
 * 合并对象(不重写原属性或方法)
 * means that properties that exist in dest will "not" be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true)
}

/**
 * 类继承
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    let baseP = base.prototype,
        childP

    childP = child.prototype = Object.create(baseP)
    childP.constructor = child
    childP._super = baseP

    if (properties) {
        extend(childP, properties)
    }
}


/**
 * 获取url中的参数
 * get params from url.
 * @returns {object} params
 */
function getRequest() {
    let url = location.href,
        theRequest = {}
    if (url.indexOf("?") !== -1) {
        let str = url.substr(url.lastIndexOf("?") + 1),
            strs = str.split("&")
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1])
        }
    }
    return theRequest
}

/**
 * 获取url中的参数
 * @param name
 * @returns {*}
 */
function getQueryString(name) {
    let url = location.href,
        reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = url.substr(url.lastIndexOf("?") + 1).match(reg)
    if (r != null) {
        return decodeURI(r[2])
    }
    return null
}

/**
 * 带参数的url跳转
 * go to url with param.
 * @param {object} param
 */
function param2Location(param) {
    let p = json2param(param.p)
    window.location.href = param.f + URL_EXT + "?" + p
}

/**
 * 将json类型的参数转换成url
 * json data turn to url param string.
 * @param {json} jsondata
 * @returns {string}
 */
function json2param(jsondata) {
    let p = ''
    for (let x in jsondata) {
        if (p === '') {
            p = (typeof jsondata [x] !== 'object') ? p + x + "=" + jsondata[x] : p + x + "=" + JSON.stringify(jsondata[x])
        } else {
            p = (typeof jsondata [x] !== 'object') ? p + "&" + x + "=" + jsondata[x] : p + "&" + x + "=" + JSON.stringify(jsondata[x])
        }
    }
    return p
}

/**
 * 获取json长度
 * get json object's length.
 * @param {object} jsonObj
 * @returns {number} length
 */
function getJsonLength(jsonObj) {
    let length = 0
    for (let item in jsonObj) {
        length += 1
    }
    return length
}

/**
 * 格式化日期 "1970-01-01"
 * format date time to 'Y-m-d'
 * @param {Date} dtime
 * @returns {string}
 */
function formatDate(dtime) {
    let now = new Date(parseInt(dtime) * 1000)
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    return year + "-" + month + "-" + date
}

/**
 * 格式化日期 "1970-01-01 00:00"
 * format date time to 'Y-m-d H:i'
 * @param {Date} [timestamp]
 * @param [type] default: m-d h:i, 1: m月d日, 2: m月d日 （周D）
 * @returns {string}
 */
function formatDateTime(timestamp, type) {
    let show_day = ['日', '一', '二', '三', '四', '五', '六'],
        now = (isDefined(timestamp)) ? new Date(parseInt(timestamp) * 1000) : new Date(),
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        date = now.getDate(),
        day = show_day[now.getDay()],
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds()
    switch (type) {
        case 1:
            return month + "月" + date + "日" + " " + hour + ":" + minute
            break
        case 2:
            return month + "月" + date + "日" + "（周" + day + "）"
            break
        case 3:
            return month + "月" + date + "日" + "（周" + day + "）" + " " + hour + ":" + minute
            break
        default :
            return month + "-" + date + " " + hour + ":" + minute
            break
    }
}

/**
 * is Browser from PC?
 * @returns {boolean}
 */
function isPC() {
    return !(browser.versions.android || browser.versions.ios || browser.versions.iPhone || browser.versions.iPad)

}

/**
 * is Browser from Android?
 * @returns {boolean}
 */
function isAndroid() {
    return !!browser.versions.android

}

/**
 * is Browser from IOS?
 * @returns {boolean}
 */
function isIOS() {
    return !!(browser.versions.ios || browser.versions.iPhone || browser.versions.iPad)

}

/**
 * is Browser from WeiXin(micromessenger)?
 * @returns {boolean}
 */
function isWeiXin() {
    return !!browser.versions.weixin
}

/**
 * is Operate valid?
 * @returns {boolean}
 */
function isOperateValid() {
    if (isWeiXin() || true) {
        return true
    }
// messenger('当前运行环境下不能使用语音或图片功能', 'info', 1000)
    return false
}

/**
 * 检测对象是否已定义
 * object is defined or not
 * @param {object|*} obj
 * @returns {boolean}
 */
function isDefined(obj) {
//return obj !== undefined
    return obj != null // 要同时判断 null 和 undefined
}

/**
 * 检测是否空对象
 * is empty object or not "{}"
 * @param {object} obj
 * @returns {boolean}
 */
function isEmptyObj(obj) {
    for (let s in obj) {
        return false
    }
    return true
}

/**
 * 检测Email地址是否合法
 * Email address format validation.
 * @param {string} str
 * @returns {boolean}
 */
function isEmail(str) {
    let reg = /^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+(.[a-zA-Z]{2,3})$/
    return reg.test(str)
}

/**
 * 检测手机号码格式是否合法
 * Mobile phone format validation.
 * @param {string} str
 * @returns {boolean}
 */
function isPhone(str) {
    let reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}

/**
 * 检测电话号码格式是否合法
 * Telephone format validation.
 * @param {string} str
 * @returns {boolean}
 */
function isTelephone(str) {
    let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/ // 电话格式验证
    return reg.test(str)
}

/**
 * 提示信息框
 * dialog box
 * @param {string} msg 提示信息
 * @param {boolean} [state] 提示状态：true 成功；false 失败
 * @param {number} [time] 显示时间
 */
let messengerTimeOutID
function messenger(msg, state, time) {
    let after = isDefined(time) ? time : 2000,
        icon = $("#messenger i")
    $("#messenger p").html(msg)
    if (isDefined(state) && state === false) {
        icon.removeClass('weui-icon-info-circle').addClass('weui-icon-cancel') // fail
    } else if (state === true) {
        icon.removeClass('weui-icon-cancel weui-icon-info-circle') // true
    } else {
        icon.removeClass('weui-icon-cancel').addClass('weui-icon-info-circle') // info
    }
    $("#messenger").show()
    clearTimeout(messengerTimeOutID)
    messengerTimeOutID = setTimeout(function () {
        $("#messenger").hide()
    }, after)
}

let loading = $("#loading")


export default {
    isWeiXin,
    isDefined,
    getRequest,
    getQueryString,
    messenger,
    loading
}