# Vue 单页项目
整个项目只有一个HTML文件

在vue中0我们写的每一个页面其实都只是一个HTML片段

通过特殊的手段来实现，每次只让一个代码的片段生效，也就模拟成了多个HTML文件一样的效果。



# vue-router
就是特殊的手段


1. router-link
2. router-view
3. 二级路由


- 路由的跳转
1. router-link
2. 编程式路由跳转 this.$router.push()
3. 路由传参 
{path:"xxx", query: {}}
{name:"xxx", params: {}}