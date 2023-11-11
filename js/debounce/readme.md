# js 八股文之防抖节流

## 前端‘三清’
- window
 BOM 浏览器对象负责 body 之外的浏览器功能
 -document
  DOM js 会跟dom"交流"
-object
   -js 的顶层对象
   -new object()  {} 简写
   -wan._proto_(私有属性,原型) -> object -> null
- js类
   - 大写的函数作为构造函数
     new + this 完成由{} 空对象到构造完成的过程
     对象就有属性了
   - 对象的方法？
     构造函数的prototype上
    wanwan 和 Person 没有血缘关系，女娲和人？
    构造的过程 new Person {}object 空对象
    Person.prototype {}
- Person.prototype 原型
- Object.rototype  原型
- wanwan._proto_._proto_._proto_ 原型链
- 原型的哪一栈上有的方法， 对象都可以用
- js 面向对象不是血缘的， 而是面向原型的