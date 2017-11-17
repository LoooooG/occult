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