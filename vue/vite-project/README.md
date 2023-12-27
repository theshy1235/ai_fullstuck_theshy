# vue 数据流

- 数据流
  数据库 todos ->   MVC（Model-View-Controller）  router + controller+model
- HTTP协议
   GET /todos
   router /todos
   controller todosContoller 业务逻辑 select * from todos;
   model 表的结构抽象
   api 接口 返回 json

- 前后端分离
    - api 
    - vuex  vue大型项目 ，大公司一样 财务
       state getters mutatins actions
    - api -> vuex(管理着页面要到的数据) -> component
- vue 组件开发最难的是设计数据
   - ref/reactive 私有数据
   - props 父组件
   - computed 计算属性