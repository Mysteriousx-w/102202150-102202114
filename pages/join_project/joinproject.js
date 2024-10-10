Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeFilter: 'recruiting', // 默认是'招募中'
    projectList: [],
    filteredProjects: []
  },

  // 页面加载时的生命周期函数
  onLoad() {
    this.getProjectsFromDatabase(); // 加载时获取项目
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
        });
        // 默认过滤‘招募中’项目
        this.onFilterChange({ currentTarget: { dataset: { filter: 'recruiting' } } });
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
