Page({
  data: {
    projects: [
      {
        name: '项目A',
        status: '正在招募',
        teamSize: '2/5人',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm4.png',
        isEnded: false
      },
      {
        name: '项目B',
        status: '正在进行',
        teamSize: '5/5人',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm5.png',
        isEnded: false
      },
      {
        name: '项目C',
        status: '已结束',
        teamSize: '6/6人',
        imgSrc: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/project/xm6.png',
        isEnded: true
      }
    ]
  },

  // 切换到“我创建的项目”
  switchToCreated() {
    wx.navigateTo({
      url: '/pages/createdproject/createdproject'
    });
  },

  onmanage_project(){
    wx.navigateTo({
      url: '/pages/manage_project/manage_project'
    });
  },

  // 保留切换到“我加入的项目”功能，防止误触
  switchToJoined() {
    console.log('当前已在“我加入的项目”页面');
  },
  onUnload() {
    // 使用 wx.reLaunch 清除页面栈并跳转到目标页面
    wx.reLaunch({
      url: '/pages/mine/mine'  // 替换为你要跳转的页面路径
    });
  }
});
