(function (doc, win) {
    // 用js动态修改页面跟字体大小
    var docEL = doc.documentElement
    var recalc = function () {
        var clientWidth = docEL.clientWidth
        docEL.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }
    doc.addEventListener('DOMContentLoaded', recalc)
    win.addEventListener('resize', recalc)
})(document, window)