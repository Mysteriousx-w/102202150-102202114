Page({
  data: {
    officialMembers: [],
    candidateMembers: [],
    initiator: {},
    totalMembers: 5 // 设置总人数限制
  },

  onLoad: function() {
    this.getMembers(); // 页面加载时获取成员信息
  },

  // 获取所有成员数据
  getMembers: function() {
    const db = wx.cloud.database();
    db.collection('members').get({
      success: res => {
        const members = res.data;
        const officialMembers = members.filter(m => m.type === 'official');
        const candidateMembers = members.filter(m => m.type === 'candidate');
        const initiator = members.find(m => m.type === 'initiator');
        
        this.setData({
          officialMembers: officialMembers,
          candidateMembers: candidateMembers,
          initiator: initiator
        });
      },
      fail: err => {
        console.error('获取成员失败', err);
      }
    });
  },

  // 移除正式成员
  removeMember: function(e) {
    const memberId = e.currentTarget.dataset.id;
    const db = wx.cloud.database();

    db.collection('members').doc(memberId).remove({
      success: res => {
        wx.showToast({
          title: '成员已移除',
          icon: 'success',
          duration: 2000
        });
        this.getMembers(); // 重新获取成员列表
      },
      fail: err => {
        console.error('移除成员失败', err);
        wx.showToast({
          title: '移除失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 邀请候补成员成为正式成员
  inviteMember: function(e) {
    // 获取实时的成员数量（防止异步导致问题）
    const currentMembersCount = this.data.officialMembers.length+1;

    // 判断是否已达到总人数上限
    if (currentMembersCount >= this.data.totalMembers) {
      wx.showToast({
        title: '人数已达上限',
        icon: 'none',
        duration: 2000
      });
      return; // 阻止邀请操作
    }

    const memberId = e.currentTarget.dataset.id;
    const db = wx.cloud.database();

    // 更新候补成员状态为正式成员
    db.collection('members').doc(memberId).update({
      data: {
        type: 'official'  // 将候补成员更新为正式成员
      },
      success: res => {
        wx.showToast({
          title: '邀请成功',
          icon: 'success',
          duration: 2000
        });

        // 更新本地数据，手动增加officialMembers数量以防止异步问题
        const newMember = this.data.candidateMembers.find(m => m._id === memberId);
        const updatedOfficialMembers = this.data.officialMembers.concat(newMember);
        const updatedCandidateMembers = this.data.candidateMembers.filter(m => m._id !== memberId);

        this.setData({
          officialMembers: updatedOfficialMembers,
          candidateMembers: updatedCandidateMembers
        });

        this.getMembers(); // 重新获取成员列表以确保最新数据展示
      },
      fail: err => {
        console.error('邀请成员失败', err);
        wx.showToast({
          title: '邀请失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 开始招募新成员
  recruitMembers: function() {
    wx.showToast({
      title: '开始招募队员',
      icon: 'success',
      duration: 2000
    });
    // 可以在此跳转到招募页面或进行更多逻辑处理
  }
});