Page({
  data: {
    tasks: [
      { name: '10/8 任务1', value: '1' },
      { name: '10/9 任务2', value: '2' },
      { name: '10/10 任务3', value: '3' }
    ],
    files: [
      { name: '10/9任务文件', count: 4 },
      { name: '10/8任务文件', count: 6 }
    ],
    meetings: [
      { date: '2021-08-13' }
    ],
    selectedDate: '2024-10-13'  // 默认选中的日期
  },

  onLoad: function() {
    // 页面初始化时的逻辑
  },

  // 添加任务
  addTask: function() {
    wx.showModal({
      title: '添加新任务',
      
      editable: true,
      success: (res) => {
        if (res.confirm) {
          let newTask = { id: this.data.tasks.length + 1, name: res.content };
          this.setData({
            tasks: [...this.data.tasks, newTask]
          });
          wx.showToast({
            title: '任务已添加',
            icon: 'none'
          });
        }
      }
    });
  },

  // 上传文件
  uploadFile: function() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        const newFile = { name: `任务文件 ${this.data.files.length + 1}`, count: 1 };
        this.setData({
          files: [...this.data.files, newFile]
        });
        wx.showToast({
          title: '文件已上传',
          icon: 'none'
        });
      }
    });
  },

  // 选择日期
  onDateChange: function(e) {
    this.setData({
      selectedDate: e.detail.value
    });
    wx.showToast({
      title: `选择日期: ${e.detail.value}`,
      icon: 'none'
    });
  },

  onchat(){
    wx.navigateTo({
      url: '/pages/chat/chat'
    });
  },

  // 添加会议日程
  addMeeting: function() {
    const newMeeting = { date: this.data.selectedDate };
    this.setData({
      meetings: [...this.data.meetings, newMeeting]
    });
    wx.showToast({
      title: '日程已添加',
      icon: 'none'
    });
  }
});