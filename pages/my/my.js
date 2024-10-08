Page({
  data: {
    userInfo: {
      avatar: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/1 @1x.png",
      nickname: "用户昵称",
      description: "计算机与大数据学院",
      editText: "点击这里，填写简介"
    },
    menuItems: [
      {
        icon: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/antFill-project@1x (1).png",
        title: "项目管理",
        page: "/pages/project_management/project_management"
      },
      {
        icon: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/semiDesign-semi-icons-user_circle 1@1x.png",
        title: "身份绑定",
        page: "/pages/identity_binding/identity_binding"
      },
      {
        icon: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/riFill-smartphone-fill@1x.png",
        title: "绑定手机",
        page: "/pages/bind_phone/bind_phone"
      },
      {
        icon: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/iconPark-message-emoji@1x.png",
        title: "联系客服",
        page: "/pages/contact_customer_service/contact_customer_service"
      },
      {
        icon: "https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/images/mine/semiDesign-semi-icons-help_circle@1x.png",
        title: "帮助",
        page: "/pages/help/help"
      }
    ]
  },

  // 编辑资料
  onEditProfile() {
    wx.showToast({
      title: '编辑资料功能暂未实现',
      icon: 'none'
    });
  },

  // 点击菜单项
  onMenuItemClick(e) {
    const page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: page
    });
  }
});
