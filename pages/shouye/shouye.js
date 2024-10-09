// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectList: [
      {
          id: 1,
          title: '热门项目A',
          image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm1.png',
          description: '这是项目A的描述',
          status:'招募中',
          tap:'Web开发',
      },
      {
          id: 2,
          title: '热门项目B',
          image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm2.png',
          description: '这是项目B的描述',
          status:'进行中',
          tap:'市场营销',
      },
      {
        id: 3,
        title: '热门项目C',
        image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm2.png',
        description: '这是项目B的描述',
        status:'已完成',
        tap:'后端开发',
    }
      // 更多项目...
     ],

  },

  onCreateProject() {
    wx.navigateTo({
      url: '/pages/add_project/add_project'
    });
  },

  onJoinProject() {
    wx.navigateTo({
      url: '/pages/join_project/joinproject'
    });
  },
  onsearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },

  onViewAllProjects() {
    wx.navigateTo({
      url: '/pages/all_projects/all_projects'
    });
  },

  onViewAllProjectdetail(){
    wx.navigateTo({
      url: '/pages/project_detail/project_detail'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})