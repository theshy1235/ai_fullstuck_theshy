Person.prototype.say = function () {
    console.log('jxb 真好吃')
}

function Person() {
    this.name = '冷少'
    this.age = 18
}

// Person.eat = function(){
//     console.log('eating jxb');
// }
let p = new Person()
let p2 = new Person()


//Person.eat();
console.log(p);
p.say()

// let a  = 1
// let b  = {n:2}