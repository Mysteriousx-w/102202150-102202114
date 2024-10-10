// task_manager.test.js

global.wx = {
  navigateTo: jest.fn(),      // 模拟 wx.navigateTo
  showToast: jest.fn(),       // 模拟 wx.showToast
  showModal: jest.fn(),       // 模拟 wx.showModal
  chooseMessageFile: jest.fn(), // 模拟 wx.chooseMessageFile
  setData: jest.fn(),         // 模拟 setData 方法
};

// 模拟 Page 函数
let pageInstance;
global.Page = jest.fn((config) => {
  pageInstance = {
    data: config.data,
    setData: jest.fn((newData) => {
      Object.assign(pageInstance.data, newData);  // 更新 data
    }),
    addTask: config.addTask,
    uploadFile: config.uploadFile,
    onDateChange: config.onDateChange,
    onchat: config.onchat,
    addMeeting: config.addMeeting,
  };
});

// 在此处编写测试用例
describe('任务管理页面测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('./task_manager.js'); // 重新加载页面
  });

  test('Page 函数应该被调用', () => {
    expect(Page).toHaveBeenCalled();
  });

  test('addTask 应该添加任务并显示提示', () => {
    const mockModalResponse = { confirm: true, content: '新任务' };
    wx.showModal.mockImplementation((options) => {
      options.success(mockModalResponse);
    });

    pageInstance.addTask(); // 调用添加任务方法

    expect(wx.showToast).toHaveBeenCalledWith({
      title: '任务已添加',
      icon: 'none'
    });
    expect(pageInstance.data.tasks.length).toBe(4); // 确保任务数量增加
    expect(pageInstance.data.tasks[3].name).toBe('新任务'); // 新任务的名称
  });

  test('uploadFile 应该上传文件并显示提示', () => {
    const mockFileResponse = { name: '任务文件 1', count: 1 };
    wx.chooseMessageFile.mockImplementation((options) => {
      options.success(mockFileResponse);
    });

    pageInstance.uploadFile(); // 调用上传文件方法

    expect(wx.showToast).toHaveBeenCalledWith({
      title: '文件已上传',
      icon: 'none'
    });
    expect(pageInstance.data.files.length).toBe(3); // 确保文件数量增加
  });

  test('onDateChange 应该更新 selectedDate 并显示提示', () => {
    const mockDate = { detail: { value: '2024-10-14' } };
    pageInstance.onDateChange(mockDate); // 调用选择日期方法

    expect(pageInstance.data.selectedDate).toBe('2024-10-14'); // 确保日期更新
    expect(wx.showToast).toHaveBeenCalledWith({
      title: '选择日期: 2024-10-14',
      icon: 'none'
    });
  });

  test('addMeeting 应该添加会议日程并显示提示', () => {
    pageInstance.addMeeting(); // 调用添加会议方法

    expect(pageInstance.data.meetings.length).toBe(2); // 确保会议数量增加
    expect(wx.showToast).toHaveBeenCalledWith({
      title: '日程已添加',
      icon: 'none'
    });
  });
});
