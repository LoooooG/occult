// 格式化秒数到时间格式
Number.prototype.formatTime = function () {
    // 计算
    let h = 0, i = 0, s = Number.parseInt(this)
    if (s > 60) {
        i = Number.parseInt(s / 60)
        s = Number.parseInt(s % 60)
        if (i > 60) {
            h = Number.parseInt(i / 60)
            i = Number.parseInt(i % 60)
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