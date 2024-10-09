const app = getApp();
const db = wx.cloud.database();
const _ = db.command;
const messagesCollection = db.collection('groupMessages');  // 群聊的数据库集合

Page({
  data: {
    messages: [],        // 群聊消息数组
    inputValue: '',      // 输入框的值
    userId: '',          // 当前用户ID
    avatarUrl: '',       // 当前用户头像
    groupId: '',         // 当前群聊的ID
    typingStatus: false, // 是否显示“对方正在输入”
  },

  onLoad: function (options) {
    this.setData({
      userId: app.globalData.userId || 'defaultUserId', // 如果没有获取到userId，默认一个
      avatarUrl: app.globalData.avatarUrl || 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/Copy 7@1x (3).png', // 初始化用户头像
      groupId: options.groupId || 'defaultGroupId' // 初始化群聊ID
    });

    // 初始化聊天记录
    this.loadInitialMessages();

    // 开启群聊消息监听
    this.watchMessages();
  },

  // 初始化聊天记录
  loadInitialMessages() {
    messagesCollection
      .where({
        groupId: _.eq(this.data.groupId), // 获取当前群聊的消息
      })
      .orderBy('createTime', 'asc') // 按照时间升序排序
      .get({
        success: res => {
          this.setData({
            messages: res.data
          });
          console.log('初始化聊天记录: ', res.data);
        },
        fail: err => {
          console.error('初始化聊天记录失败: ', err);
        }
      });
  },

  // 监听群聊消息的变化
  watchMessages() {
    messagesCollection
      .where({
        groupId: _.eq(this.data.groupId), // 监听当前群聊的消息
      })
      .watch({
        onChange: snapshot => {
          console.log('snapshot: ', snapshot);
          if (snapshot.docChanges.length) {
            // 更新消息数组，确保新消息可以在界面显示
            this.setData({
              messages: snapshot.docs // 监听变化并更新messages数组
            });
            console.log('监听消息变化成功: ', snapshot.docs);
          }
        },
        onError: err => {
          console.error('watch error', err);
        }
      });
  },

  // 输入消息
  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    });

    // 模拟“对方正在输入”的状态
    this.setData({ typingStatus: true });
    setTimeout(() => {
      this.setData({ typingStatus: false });
    }, 1000);
  },

  // 发送群聊消息
  sendMessage() {
    const message = this.data.inputValue.trim();
    if (!message) return;

    const time = new Date();
    // 存入云数据库
    messagesCollection.add({
      data: {
        groupId: this.data.groupId,
        senderId: this.data.userId,   // 当前用户ID
        senderName: app.globalData.userName || '匿名用户', // 发送者的名字
        content: message,
        avatarUrl: this.data.avatarUrl,   // 当前用户的头像
        createTime: time                // 消息发送的时间
      },
      success: res => {
        // 发送成功后重新加载消息列表，或者在 `watchMessages` 的监听中自动更新
        this.loadInitialMessages();
        this.setData({
          inputValue: ''   // 发送成功后清空输入框
        });
        console.log('消息发送成功', res);
      },
      fail: err => {
        console.error('消息发送失败', err);
      }
    });
  }
});