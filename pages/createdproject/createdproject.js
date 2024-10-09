Page({
  data: {
    currentTab: 0,
    projects: [
      {
        name: '项目名称',
        status: '正在招募',
        teamSize: '2/5',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm1.png',
        buttons: ['管理成员', '项目主页', '修改项目'],
        isEnded: false
      },
      {
        name: '项目名称',
        status: '正在进行',
        teamSize: '5/5',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm2.png',
        buttons: ['管理成员', '项目主页', '修改项目'],
        isEnded: false
      },
      {
        name: '项目名称',
        status: '已结束',
        teamSize: '6/6',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm3.png',
        buttons: ['管理成员', '项目主页', '修改项目'],
        isEnded: true
      },
    ]
  },

  onViewAllteammanage(){
    wx.navigateTo({
      url: '/pages/teammanage/teammanage'
    });
  },

  onmanage_project(){
    wx.navigateTo({
      url: '/pages/manage_project/manage_project'
    });
  },

  // 切换到我加入的项目
  switchToJoined() {
    wx.navigateTo({
      url: '/pages/joinedproject/joinedproject'
    });
  },
  onUnload() {
    // 使用 wx.reLaunch 清除页面栈并跳转到目标页面
    wx.reLaunch({
      url: '/pages/mine/mine'  // 替换为你要跳转的页面路径
    });
  }
});
