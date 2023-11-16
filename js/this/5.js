// function foo(){}
// var foo = function(){}

var obj = {
    a:1
}
var foo = () => {
    console.log(this.a);
}

foo()

var bar = function(){
    c
}