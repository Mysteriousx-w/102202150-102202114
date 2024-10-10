// shouye.test.js

global.wx = {
    navigateTo: jest.fn(), // 模拟 wx.navigateTo
    showToast: jest.fn(),  // 模拟 wx.showToast
    setData: jest.fn(),    // 模拟 setData 方法
  };
  
  // 模拟 Page 函数
  let pageInstance;
  global.Page = jest.fn((config) => {
    pageInstance = {
      data: config.data,
      setData: jest.fn((newData) => {
        Object.assign(pageInstance.data, newData);  // 更新 data
      }),
      onCreateProject: config.onCreateProject,
      onJoinProject: config.onJoinProject,
      onsearch: config.onsearch,
      onViewAllProjects: config.onViewAllProjects,
      onViewAllProjectdetail: config.onViewAllProjectdetail,
      onLoad: config.onLoad,
    };
  });
  
  // 在此处编写测试用例
  describe('首页测试', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      require('./shouye.js'); // 重新加载页面
    });
  
    test('Page 函数应该被调用', () => {
      expect(Page).toHaveBeenCalled();
    });
  
    test('onCreateProject 应该调用 wx.navigateTo', () => {
      pageInstance.onCreateProject();
      expect(wx.navigateTo).toHaveBeenCalledWith({
        url: '/pages/add_project/add_project'
      });
    });
  
    test('onJoinProject 应该调用 wx.navigateTo', () => {
      pageInstance.onJoinProject();
      expect(wx.navigateTo).toHaveBeenCalledWith({
        url: '/pages/join_project/joinproject'
      });
    });
  
    test('onsearch 应该调用 wx.navigateTo', () => {
      pageInstance.onsearch();
      expect(wx.navigateTo).toHaveBeenCalledWith({
        url: '/pages/search/search'
      });
    });
  
    test('onViewAllProjects 应该调用 wx.navigateTo', () => {
      pageInstance.onViewAllProjects();
      expect(wx.navigateTo).toHaveBeenCalledWith({
        url: '/pages/all_projects/all_projects'
      });
    });
  
    test('onViewAllProjectdetail 应该调用 wx.navigateTo', () => {
      pageInstance.onViewAllProjectdetail();
      expect(wx.navigateTo).toHaveBeenCalledWith({
        url: '/pages/project_detail/project_detail'
      });
    });
  });