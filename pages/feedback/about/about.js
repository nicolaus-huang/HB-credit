// pages/about/index.js
import tabbar from '../../../lin-ui-demo/miniprogram_npm/lin-ui/tab-bar/index';
wx.cloud.init({
  env: 'env-9eb476'
});
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: '....',
    list:tabbar
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function() {
  },

  copyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: () => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        });
      }
    });
  },

  onImage() {
    wx.previewImage({
      urls: ['https://pic1.zhimg.com/80/v2-efda715dcd7e93325b213400b67c1e80_hd.png']
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
});