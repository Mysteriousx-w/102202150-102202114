// pages/all_projects/all_projects.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeFilter: 'all',
    projectList: [
      {
        id: 1,
        image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm1.png',
        title: '项目名称1',
        tap: 'Web 开发',
        description: '项目描述',
        status: '招募中',
        statusClass: 'recruiting'
      },
      {
        id: 2,
        image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm1.png',
        title: '项目名称2',
        tap: '市场营销',
        description: '项目描述',
        status: '进行中',
        statusClass: 'ongoing'
      },
      {
        id: 3,
        image: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/remenxm1.png',
        title: '项目名称3',
        tap: '前端开发',
        description: '项目描述',
        status: '已完成',
        statusClass: 'completed'
      }
    ],
    filteredProjects: []
  },

  onLoad() {
    this.setData({
      filteredProjects: this.data.projectList
    });
  },
  onsearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  onViewAllProjectdetail(){
    wx.navigateTo({
      url: '/pages/project_detail/project_detail'
    });
  },
  

  onFilterChange(e) {
    const filter = e.currentTarget.dataset.filter;
    let filteredProjects = this.data.projectList;

    if (filter === 'recruiting') {
      filteredProjects = filteredProjects.filter(item => item.status === '招募中');
    }

    this.setData({
      activeFilter: filter,
      filteredProjects: filteredProjects
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */


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