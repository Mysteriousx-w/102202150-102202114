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
    createGroupChat: true,
    defaultImageUrl: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/add_project/Copy 1@1x.png'  // 默认图片 URL
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

    // 保存到 projects 数据库（草稿）
    wx.cloud.database().collection('projects').add({
      data: {
        ...projectData,
        status: 'draft',  // 草稿状态
        createTime: new Date(),
      },
      success: res => {
        this._addToAllProjects(projectData);  // 同时写入 all_projects 数据库
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

    // 保存到 projects 数据库（已发布）
    wx.cloud.database().collection('projects').add({
      data: {
        ...projectData,
        status: 'published',  // 已发布状态
        createTime: new Date(),
      },
      success: res => {
        this._addToAllProjects(projectData);  // 同时写入 all_projects 数据库
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

  // 将项目信息同时写入 all_projects 数据库，状态为 "招募中"
  _addToAllProjects(projectData) {
    wx.cloud.database().collection('all_projects').add({
      data: {
        ...projectData,
        status: '招募中',  // 状态设为 "招募中"
        statusClass:'recruiting',
        imageURL: this.data.defaultImageUrl,  // 使用默认图片 URL
        createTime: new Date(),
      },
      success: res => {
        console.log('项目已写入 all_projects 数据库');
      },
      fail: err => {
        console.error('写入 all_projects 失败：', err);
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