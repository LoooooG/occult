// 格式化秒数到时间格式
Number.prototype.formatTime = function () {
    // 计算
    let h = 0, i = 0, s = parseInt(this)
    if (s > 60) {
        i = parseInt(s / 60)
        s = parseInt(s % 60)
        if (i > 60) {
            h = parseInt(i / 60)
            i = parseInt(i % 60)
        }
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v
    };
    if (h === 0) {
        return [zero(i), zero(s)].join(":")
    } else {
        return [zero(h), zero(i), zero(s)].join(":")
    }
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 * @param fmt
 * @param [timestamp]
 */
Date.prototype.pattern = function (fmt, timestamp) {
    if (isDefined(timestamp)) {
        timestamp.toString().length > 10 ? this.setTime(parseInt(timestamp)) : this.setTime(parseInt(timestamp) * 1000)
    }
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    }
    let week = {"0": "日", "1": "一", "2": "二", "3": "三", "4": "四", "5": "五", "6": "六"}
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[this.getDay() + ""])
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return fmt
}