Page({
  data: {
    projectID: '',
    members: [],
    timeline: []  // 静态项目进程表格数据
  },

  onLoad: function(options) {
    // 设置静态项目ID
    this.setData({
      projectID: '12345'  // 可以根据需要修改成不同项目ID
    });
    
    // 模拟项目时间轴数据
    const staticTimeline = [
      {
        time: '2019-04-11 20:46',
        event: '项目招募开始',
        status: 'completed'  // 已完成的状态
      },
      {
        time: '2019-04-13 20:46',
        event: '项目任务开始',
        status: 'in-progress'  // 进行中的状态
      },
      {
        time: '2019-04-15 20:46',
        event: '项目任务完成',
        status: ''  // 普通节点，无状态
      },
      {
        time: '2019-04-16 20:46',
        event: '默认样式的节点',
        status: ''  // 普通节点
      }
    ];
    
    // 将时间轴数据设置到页面
    this.setData({
      timeline: staticTimeline
    });
  },

  joinProject: function() {
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    });
    // 这里添加加入项目的逻辑
  }
});