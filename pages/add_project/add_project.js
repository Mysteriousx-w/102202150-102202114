Page({
  data: {
    projectName: '',
    projectMembers: '',
    instructor: '',
    skills: [
      { name: 'HTML', checked: false },
      { name: 'CSS', checked: false },
      { name: 'JavaScript', checked: false }
    ],
    projectType: '项目类型1',
    projectTypes: ['项目类型1', '项目类型2', '项目类型3'],
    deadline: '',
    description: '',
    allowOutsiders: true,
    createGroupChat: true
  },

  onLoad: function() {
    // 初始化云开发环境
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        traceUser: true,
      });
    }
  },

  // 更新输入框数据
  handleInputChange(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [field]: e.detail.value });
  },

  // 技能选择
  handleSkillChange(e) {
    const selectedValues = e.detail.value;
    const updatedSkills = this.data.skills.map(skill => ({
      ...skill,
      checked: selectedValues.includes(skill.name)
    }));
    this.setData({ skills: updatedSkills });
  },

  // 处理技能输入框的内容变化
  handleSkillInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = e.detail.value;
    const updatedSkills = this.data.skills.map((skill, idx) => {
      if (idx === index) {
        return { ...skill, name: value };
      }
      return skill;
    });
    this.setData({ skills: updatedSkills });
  },

  // 添加新的技能
  addSkill() {
    const newSkill = { name: '', checked: false };
    const updatedSkills = [...this.data.skills, newSkill];
    this.setData({ skills: updatedSkills });
  },

  // 项目类型选择
  handleProjectTypeChange(e) {
    this.setData({ projectType: this.data.projectTypes[e.detail.value] });
  },

  // 日期选择
  handleDateChange(e) {
    this.setData({ deadline: e.detail.value });
  },

  // 开关切换
  handleSwitchChange(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [field]: e.detail.value });
  },

  // 保存草稿
  handleSaveDraft() {
    const projectData = this._getProjectData();

    wx.cloud.database().collection('projects').add({
      data: {
        ...projectData,
        status: 'draft',  // 草稿状态
        createTime: new Date(),
      },
      success: res => {
        wx.showToast({
          title: '草稿已保存',
          icon: 'success'
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/shouye/shouye'
          });
        }, 1500);
      },
      fail: err => {
        console.error('保存草稿失败：', err);
        wx.showToast({
          title: '保存草稿失败',
          icon: 'none'
        });
      }
    });
  },

  // 发布项目
  handlePublishProject() {
    const projectData = this._getProjectData();

    wx.cloud.database().collection('projects').add({
      data: {
        ...projectData,
        status: 'published',  // 已发布状态
        createTime: new Date(),
      },
      success: res => {
        wx.showToast({
          title: '项目已发布',
          icon: 'success'
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/shouye/shouye'
          });
        }, 1500);
      },
      fail: err => {
        console.error('发布项目失败：', err);
        wx.showToast({
          title: '发布项目失败',
          icon: 'none'
        });
      }
    });
  },

  // 获取表单中的项目信息
  _getProjectData() {
    const { projectName, projectMembers, instructor, skills, projectType, deadline, description, allowOutsiders, createGroupChat } = this.data;
    const selectedSkills = skills.filter(skill => skill.checked).map(skill => skill.name);
    
    return {
      projectName,
      projectMembers: parseInt(projectMembers, 10),
      instructor,
      skills: selectedSkills,
      projectType,
      deadline,
      description,
      allowOutsiders,
      createGroupChat
    };
  }
});