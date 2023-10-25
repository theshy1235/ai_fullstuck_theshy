//对象
var leng = {
    name:'冷少',
    age:'18',
    girlFrieng: '高圆圆',
    health: 100,
    smoke: function() {
        console.log('i am smoking coll!');
        this.health--
    },
    drink:  function() {
        console.log('it is cool!');
        this.health++
    }
}
leng.girlFrieng = '刘师姐'

// delete obj.girlFrieng
// console.log(leng);
leng.smoke()
leng.smoke()
console.log(leng.health)
// obj.drink()
// consle.log(leng.health)

