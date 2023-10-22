#路虎4s店小程序开发

-需求来自4s店
    看车  一键询问
    非常接地气  ，微信小程序生态

-html + css + js
  wxml

-小程序的基本知识
    page  来写
        index 首页  目录   直接帮我们分层了
            indes.wxml     html   view   div   小程序有哪些标签？
            indes.js       js
            indes.wxss     css
            indes.json     

-swiper组件
   幻灯片
   + swiper-item
   定时器
   chatgpt
   看开发文档的思想  AI英文
   调试工具使用

-相对单位
   -解决适配的问题
   -  pc 手机  平板
-rpx 小程序里少用或不用px
     retina 3倍retina irpx  =3px
     vh  view  height 视窗高度
     vw 视窗高度
     100 满屏
-小程序有时候卡一下，重启
-给一个元素多个类名，在选择的需求上，代码更好复用和维护
     white...给别的元素用
     hero  主题
     section
-从外到内
  盒子   而不是标签  页面的布局
  元素的类型两种   行内和块级
-取类名是技术活
    - 用最简单的单词
    - 选择器前加限定
-js
  -date  里面的数据可以绑定到页面上
  -模板不是静态页面， 由数据驱动的动态
-小程序架构思想
   -让开发者简单，小程序来了以下预设， 关注业务
   -pasge的概念
        wxml/wxss/js/json 组成
   - wxml模板
       标签是小程序自带标签 view  swiper html是没有的
       不是页面，他是活的，动态部分绑定了数据{{}}指令wx:for的
       只要数据发生改变，它会自动刷新
- js 
     date  可以绑定到模板的数据{{
     onload 生命周期  wx.request 去取下数据（后台）
     this.setData.slides
     }}
     ...
       
    
    

