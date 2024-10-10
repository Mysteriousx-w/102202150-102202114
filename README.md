# 102202150-102202114

## 目录说明和使用说明
### 1.目录说明


```
D:.
└─102202150-102202114-main
    |  add_project.test.js  //增加项目的测试文件
    │  app.js  // 小程序的全局逻辑文件，管理应用生命周期和全局数据
    │  app.json  // 小程序的全局配置文件，定义页面路径、导航栏等
    │  app.wxss  // 小程序的全局样式文件，所有页面继承的样式
    │  project.config.json  // 项目的配置文件，用于微信开发工具的编译和调试
    │  project.private.config.json  // 私有配置文件，保存项目的私有信息
    |  shouye.test.js  //首页的测试文件
    │  README.md  // 项目说明文档，包含项目介绍、使用说明等
    │  sitemap.json  // 小程序页面的爬虫信息配置
    │  sourcemap.zip  // 源代码映射文件，用于调试和错误追踪,可以不解压
    |  task_manager.test.js  //项目主页的测试文件
    │
    ├─images
    │      shouye.png  // 首页图标资源
    │      shouye1.png  // 首页图标资源（选中状态）
    │      wode.png  // "我的"图标资源
    │      wode1.png  // "我的"图标资源（选中状态）
    │      xiaoxi.png  // “消息”图标资源
    │      xiaoxi1.png  // “消息”图标资源（选中状态）
    |
    ├─utils
    |      util.js  // 自动生成的日期时间格式化工具函数文件
    |
    └─pages
        ├─add_project
        │      add_project.js  // 负责发布项目页面的逻辑处理，提交项目信息
        │      add_project.json  // 发布项目页面的配置文件
        │      add_project.wxml  // 发布项目页面的结构文件
        │      add_project.wxss  // 发布项目页面的样式文件
        │
        ├─all_projects
        │      all_projects.js  // 负责显示所有项目页面的逻辑处理
        │      all_projects.json  // 所有项目页面的配置文件
        │      all_projects.wxml  // 所有项目页面的结构文件
        │      all_projects.wxss  // 所有项目页面的样式文件
        │
        ├─chat
        │      chat.js  // 负责项目内聊天功能的逻辑处理
        │      chat.json  // 聊天页面的配置文件
        │      chat.wxml  // 聊天页面的结构文件
        │      chat.wxss  // 聊天页面的样式文件
        │
        ├─createdproject
        │      createdproject.js  // 用户已创建项目页面的逻辑处理
        │      createdproject.json  // 已创建项目页面的配置文件
        │      createdproject.wxml  // 已创建项目页面的结构文件
        │      createdproject.wxss  // 已创建项目页面的样式文件
        │
        ├─index
        │      index.js  // 首页的逻辑处理，加载热门项目等
        │      index.json  // 首页的配置文件
        │      index.wxml  // 首页的结构文件
        │      index.wxss  // 首页的样式文件
        │
        ├─joinedproject
        │      joinedproject.js  // 显示我加入的项目页面的逻辑处理
        │      joinedproject.json  // 我加入的项目页面的配置文件
        │      joinedproject.wxml  // 我加入的项目页面的结构文件
        │      joinedproject.wxss  // 我加入的项目页面的样式文件
        │
        ├─join_project
        │      joinproject.js  // 用户申请加入项目页面（招募项目）的逻辑处理
        │      joinproject.json  // 加入项目页面的配置文件
        │      joinproject.wxml  // 加入项目页面的结构文件
        │      joinproject.wxss  // 加入项目页面的样式文件
        │
        ├─logs
        │      logs.js  // 登录页面的逻辑处理
        │      logs.json  // 登录页面的配置文件
        │      logs.wxml  // 登录页面的结构文件
        │      logs.wxss  // 登录页面的样式文件
        │
        ├─manage_project
        │      manage_project.js  // 项目管理页面的逻辑处理，如修改项目信息
        │      manage_project.json  // 项目管理页面的配置文件
        │      manage_project.wxml  // 项目管理页面的结构文件
        │      manage_project.wxss  // 项目管理页面的样式文件
        │
        ├─message
        │      message.js  // 消息页面的逻辑处理，显示用户的通知和消息
        │      message.json  // 消息页面的配置文件
        │      message.wxml  // 消息页面的结构文件
        │      message.wxss  // 消息页面的样式文件
        │
        ├─mine
        │      mine.js  // "我的"页面的逻辑处理，显示用户个人信息
        │      mine.json  // "我的"页面的配置文件
        │      mine.wxml  // "我的"页面的结构文件
        │      mine.wxss  // "我的"页面的样式文件
        │
        ├─project_detail
        │      project_detail.js  // 项目详情页面的逻辑处理，显示某项目的详细信息
        │      project_detail.json  // 项目详情页面的配置文件
        │      project_detail.wxml  // 项目详情页面的结构文件
        │      project_detail.wxss  // 项目详情页面的样式文件
        │
        ├─project_message
        │      project_message.js  // 项目消息页面的逻辑处理，显示项目相关的消息和通知
        │      project_message.json  // 项目消息页面的配置文件
        │      project_message.wxml  // 项目消息页面的结构文件
        │      project_message.wxss  // 项目消息页面的样式文件
        │
        ├─search
        │      search.js  // 搜索页面的逻辑处理，处理用户的搜索请求
        │      search.json  // 搜索页面的配置文件
        │      search.wxml  // 搜索页面的结构文件
        │      search.wxss  // 搜索页面的样式文件
        │
        ├─shouye
        │      shouye.js  // 首页的逻辑处理，通常作为入口页面
        │      shouye.json  // 首页的配置文件
        │      shouye.wxml  // 首页的结构文件
        │      shouye.wxss  // 首页的样式文件
        │
        └─teammanage
                teammanage.js  // 团队成员管理页面的逻辑处理，管理团队成员
                teammanage.json  // 团队成员管理页面的配置文件
                teammanage.wxml  // 团队成员管理页面的结构文件
                teammanage.wxss  // 团队成员管理页面的样式文件


```
### 2.使用说明
- 环境：微信开发者工具

   ![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010184326167-1092146163.png )
- 步骤
  - 从Github中下载zip文件到本地，解压缩
![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010185221484-1123034050.png)
![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010185342116-1429566861.png)
  - 导入文件夹并创建项目，AppID为wx021ccc14a38b63b9，后端服务使用微信云开发
![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010191103407-1272700829.png)
![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010192724596-1683444188.png)
  - 或者使用微信扫描下面二维码，申请查看，等待管理员同意就可以使用体验版小程序
![](https://img2024.cnblogs.com/blog/3512208/202410/3512208-20241010191944408-1772763517.jpg)
