# typeof
1. 可以准确判断除了null以外的原始类型
2. 可以判断 function


# instanceof
1. 只能判断引用类型
2. 通过原型链的查找来判断


#   Object.prototype.toString.call(str)

1. 如果this 值未定义，则返回“ [object Undefined] ”。

2. 如果this 值为null，则返回“ [object Null] ”。

3. 令 O为调用ToObject并传递this值作为参数的结果。 如果穿的原始类型，那就回调用ToObject将原始类型转换成对象

4. 令 class为O的 [[Class]] 内部属性的值。

5. 返回由三个字符串“ [object ”、 class和“ ] ”连接而成的字符串值。

- xxx.call(原始值) 为什么不报错?????
- toString通过读取数据解构内部属性来读取到数据的类型 class


# Array.isArray()

let arr = []
arr.Array()