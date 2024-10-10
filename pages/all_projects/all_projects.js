Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeFilter: 'all',
    projectList: [],
    filteredProjects: []
  },

  onLoad() {
    this.getProjectsFromDatabase();
  },

  onViewAllProjectdetail(){
    wx.navigateTo({
      url: '/pages/project_detail/project_detail'
    });
  },

  // 从云数据库获取项目信息
  getProjectsFromDatabase() {
    const db = wx.cloud.database();
    db.collection('all_projects').get({
      success: res => {
        const projects = res.data;
        this.setData({
          projectList: projects,
          filteredProjects: projects
        });
      },
      fail: err => {
        console.error('获取项目列表失败', err);
      }
    });
  },

  onsearch() {
    wx.navigateTo({
      url: '/pages/search/search'
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

  onReady() {},

  onShow() {},

  onHide() {},

  onUnload() {},

  onPullDownRefresh() {
    this.getProjectsFromDatabase(); // 下拉刷新时重新获取项目
  },

  onReachBottom() {},

  onShareAppMessage() {}
});