const p = new Promise((resolve, reject) => {
    console.log('hi')
    // 异步任务
    setTimeout(()=>{
        console.log('hello');
        resolve() // 确认执行成功了 
    },1000)
})
p.then(function (){
    console.log('1000ms后运行,hello world')
})