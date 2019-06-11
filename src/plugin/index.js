/* eslint-disable */

exports.install = function (Vue, option) {
  /**
   * 设置标题
   *
   * this.$app.setTitle('asdafadf')
   */
  Vue.prototype.$app = {
    setTitle: function (val) {
      document.title = val
    }
  },

  /**
   * [$document description]
   * @type {Object}
   */
  Vue.prototype.$document = {
    /**
     * 获取屏幕宽度
     * @return {[type]} [description]
     */
    screenWidth: function () {
      let w = window.screen.width
      return w || null
    }
  }
}
