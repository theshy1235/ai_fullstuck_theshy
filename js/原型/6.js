function Foo(){}
let foo = new Foo();

foo._proto_ === Foo.prototype

Foo.prototype.constructor === 
Foo.prototype._proto_ === Object.prototype
Object.prototype._proto_  === null