// pages/list5/list5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      count : 0 ,
      msg: '你好,',
      type : 1 ,
      flag : true,
      arr1:['刘泓昭','李铁钊','孟繁琦']
      
  },

  btnTapHandler(event){
    console.log(event)
    
  },

  CountChange(){
    console.log('ok'),
    this.setData({
      count: this.data.count + 2
    })
  },

  btnTap2(e){
    this.setData({
      count:this.data.count + e.target.dataset.info
    })
  },

  inputHandler(e){
   // console.log(e.detail.value)
   this.setData({
     msg:e.detail.value
   })
  },

  //李煜圣的点击事件处理函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})