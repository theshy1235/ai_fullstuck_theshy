// let obj = {
//     name: '戴总',
//     say: function () {
//         console.log(this.name);
//     }
// }
// obj.say()
// function foo(){
//     var a= 1
//     console.log(this.a)
// }
// foo()
function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "hello,I'm" + identify.call(this)
    console.log(greeting);
}

var me = {
    name: 'Tom'
}

speak.call(me)


// let obj = {
//     this: this
// }