function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('涛哥相亲了');
            resolve('相亲成功');
        }, 3000)
    })
}
function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('涛哥结婚了');
            resolve();
        }, 2000)
    })

}
function baby() {
    console.log('小小涛')
}