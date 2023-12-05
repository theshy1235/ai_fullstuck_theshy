# js 是单线程的

# 回调函数
- 回调地狱：代码维护异常困难

#  Promise
1.  Promise 实例对象后面可以借=接，.then() then中回调的执行取决与 Promise中的resolve有没有生效
2. resolve（参数） 参数会传递给.than 中的回调函数
3. then方法会默认返回promise对象，所以then2可以接在then后面，当then当中有人为返回新的promise对象作为唯一的返回值，那么then2就相当于接在人为返回的promise对象后

# async await