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
  }
}
