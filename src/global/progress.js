export default {

    progressDragable (progressNode, callback) {

        // 让progress标签初始化为0
        progressNode.value = 0
        // 让progress标签能够用鼠标拖动.
        // callback的参数中会传入progressNode

        if (progressNode.tagName !== 'PROGRESS') {
            console.log('arg 1:node is not a progress node.')
            return
        }
        if (typeof callback !== 'function') {
            console.log('arg 2:callback is not a function');
            return
        }

        const rect = progressNode.getBoundingClientRect()

        function changeValue(event) {
            event.stopPropagation()
            const length = event.pageX - rect.left
            progressNode.value = length / rect.width
            //回调函数,并传入进度条的值
            callback(progressNode.value)

        }

        //点击改变进度
        progressNode.addEventListener('click', changeValue, false)

        //拖动改变进度
        progressNode.addEventListener('mousedown', function (event) {
            event.stopPropagation()
            if (event.button === 0) {
                progressNode.addEventListener('mousemove', changeValue, false)
            }
        }, false)
        progressNode.addEventListener('mouseup', function (event) {
            event.stopPropagation()
            if (event.button === 0) {
                progressNode.removeEventListener('mousemove', changeValue, false)
            }
        }, false)

        //当鼠标移出元素时,移除移动改变进度的监听器,防止鼠标在元素外弹起的情况.
        progressNode.addEventListener('mouseleave', function (event) {
            event.stopPropagation()
            progressNode.removeEventListener('mousemove', changeValue, false)
        }, false)
    }
}