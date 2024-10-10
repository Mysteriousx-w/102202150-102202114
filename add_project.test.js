// add_project.test.js

global.wx = {
    cloud: {
      database: jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnValue({
          add: jest.fn().mockResolvedValue({}),  // 模拟数据库的 add 操作成功
        }),
      }),
    },
    showToast: jest.fn(),  // 模拟 wx.showToast
    switchTab: jest.fn(),   // 模拟 wx.switchTab
  };
  
  // 模拟 Page 函数
  let pageInstance;
  global.Page = jest.fn((config) => {
    pageInstance = {
      data: config.data,
      setData: jest.fn((newData) => {
        Object.assign(pageInstance.data, newData);  // 更新 data
      }),
      handleInputChange: config.handleInputChange,
      handleSaveDraft: config.handleSaveDraft,
      handlePublishProject: config.handlePublishProject,
      addSkill: config.addSkill,
    };
  });
  
  describe('项目页面测试', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      require('./add_project.js'); // 重新加载页面
    });
  
    test('Page 函数应该被调用', () => {
      expect(Page).toHaveBeenCalled();
    });
  
    test('handleInputChange 应该更新 data', () => {
      const inputEvent = {
        currentTarget: { dataset: { field: 'projectName' } },
        detail: { value: '新的项目名称' }
      };
  
      pageInstance.handleInputChange(inputEvent);
      expect(pageInstance.data.projectName).toBe('新的项目名称'); // 验证 projectName 被更新
    });
})
    
   