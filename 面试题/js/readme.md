1. js数组上有哪些方法？
增加： push unshift splice concat
删除：pop shift splice slice
改：reverse sort
查：indexOf includes lastIndexOf find
转换：join
迭代：forEach map filter some every
Array.from() Array.of()
2. js字符串上有哪些方法？
增：concat
删: slice substr substring
改：replace trimRight trimLeft trim padStart padEnd toUpperCase toLowerCase
查：indexOf includes lastIndexOf find endsWith startWith
转换: split
3. 谈谈js中的类型转换机制
是什么： js中有原始类型和引用类型： 原始类型：number string symbol boolean undefined null Bigint 引用类型：[] {} function Date Regexp Set Map
通常开发过程中，会用到一些显示类型转换的手段来完成逻辑开发 Number() ...

在V8执行过程中还存在另一种类型转换 --- 隐式类型转换

通常发生在 比较运算符 和 算术运算符

== != < > if while

/ %
[] == ![]

4. == 和 === 的区别？
5. 深浅拷贝的区别？如何实现一个深拷贝？
深浅拷贝通常只针对引用类型

浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的指针

Object.assign concat slice [...arr]

深拷贝：层层拷贝，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象 JSON.parse(JSON.stringify(obj)) --- 无法处理 undefined Symbol function -- 无法处理循环引用
