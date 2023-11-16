function foo() {
    console.log(this.a);
}

var obj = {
    a: 1
}
// foo.call(obj,4,5)

//   foo.apply(obj,[4,5])

//   let bar = foo.bind(obj,4,5)
//   bar()


//   let bar = foo.bind(obj)
//   bar(4,5)


let bar = foo.bind(obj,4)
bar(5,6)