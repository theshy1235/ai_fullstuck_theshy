// var obj = {}
// obj.a = 1

// var num = 123
// num.a = 'hello'
// console.log(num.a);//undefined

var num = new Number(123);//String() Number() Object() Arrey() Date() Boolean() 内部函数
num.a = 'hello'
delete num.a
console.log(num.a);