Page({
  data: {
    tabs: [
      { icon: 'bell', label: '小智通知' ,userAvatar:'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/3@1x (2).png'},
      { icon: 'clipboard', label: '项目消息',userAvatar:'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/3@1x (3).png' },
      { icon: 'users', label: '项目小组' ,userAvatar:'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/3@1x (1).png'}
    ],
    messages: [
      {
        userAvatar: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/Copy 7@1x (1).png', // 替换为实际图片URL
        userName: '用户昵称1',
        messageContent: '我：这里是消息内容',
        time: '两分钟前'
      },
      {
        userAvatar: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/Copy 7@1x (2).png',
        userName: '用户昵称2',
        messageContent: '用户昵称：这里是消息内容',
        time: '十分钟前'
      },
      {
        userAvatar: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/Copy 7@1x (3).png',
        userName: '用户昵称3',
        messageContent: '用户昵称：这里是消息内容',
        time: '三十分钟前'
      },
      {
        userAvatar: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/Copy 7@1x (4).png',
        userName: '用户昵称4',
        messageContent: '用户昵称：这里是消息内容',
        time: '两个小时前'
      }
    ]
  },
  
  onLoad() {
    // 页面初始化时执行的代码，比如从数据库获取消息
  },
   // 处理点击事件
   onTabClick(e) {
    const icon = e.currentTarget.dataset.icon;

    // 判断是否是 clipboard 图标
    if (icon === 'clipboard') {
      wx.navigateTo({
        url: '/pages/project_message/project_message'  // 这里指定要跳转的页面
      });
    } else {
      wx.showToast({
        title: '未设置跳转',
        icon: 'none'
      });
    }
  },
  // 点击消息的事件处理
  goToChat(event) {
    const userId = event.currentTarget.dataset.userid;
    wx.navigateTo({
      url: `/pages/chat/chat?userid=${userId}`
    });
  }
  
});