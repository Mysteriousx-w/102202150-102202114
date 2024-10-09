Page({
  data: {
    activeFilter: 'recruiting', // 默认设置为 'recruiting'
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

  // 页面加载时的生命周期函数
  onLoad() {
    this.filterProjects('recruiting'); // 进入页面时默认显示 '招募中' 项目
  },
  onViewAllProjectdetail(){
    wx.navigateTo({
      url: '/pages/project_detail/project_detail'
    });
  },

  // 根据筛选条件过滤项目
  filterProjects(filter) {
    let filteredProjects = this.data.projectList;

    if (filter === 'recruiting') {
      filteredProjects = filteredProjects.filter(item => item.status === '招募中');
    } else if (filter === 'all') {
      filteredProjects = this.data.projectList;
    }

    this.setData({
      activeFilter: filter,
      filteredProjects: filteredProjects
    });
  },

  // 搜索功能
  onsearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },

  // 筛选条件改变时调用
  onFilterChange(e) {
    const filter = e.currentTarget.dataset.filter;
    this.filterProjects(filter); // 重新过滤项目
  }
});
