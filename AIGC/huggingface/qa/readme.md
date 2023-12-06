# HuggingFace transformers

- 来到前端
   AIGC
   文生文 openai Completions
   文生图 mid stable diffusion
   文生音乐 
   文生视频 
   AIGC 交互 前端 transformers.js


- Q/A
    - 把一个资料交给大模型 基本法
    - Q/A AI 应用
       Quw=estion
    - Answer
- 开源素养
- repo?
   项目
   提交代码 contributor
  fork
   开源的，fork 到自己的仓库，
   提交给原作者， commit 你的修改
-  pandas 数据分析库
     - import pandas as pd
     - 最简单的数据结构 装载数据前，选择合适的结构 pd.DateFrame.form_dict({
        key: value
     })
        没有new table 数据的实例
     - from transformers import pipeline
        const r = pipeline(task,model) 返回值是一个具体nip功能函数
        r(quer="",table=context)
- 伴随着模型的下载

- 文件系统 os
    后端思维 文件系统是核心 system 
    - 读取目录下的文件
    os 是文件系统，操作系统 网络，数据库 内存
    import os
    os.listdir()
- AutoGen 直接接管这类代码的生成 70% 代码不用写
     - 2 500万 
        200   管家  -> cooker 
        AutoGen的AI 思想
     - 提供两种 agent 
        - UserProxyAgent
          以对话的方式，向其它agent发命令
          initiateChat(3
             assistant,
             messag=""
          )
          llm_config OpenAI 能力
          负责执行代码，结果是否已经完成用户的命令，
        - AssistantAgent 助理Agent
            能够生成代码
