<template>
  <div class="app-main">
    <router-view/>
  </div>
</template>

<script>
// import appHeader from '@/components/header'
export default {
  // components: {
  //   appHeader
  // },
  data () {
    return {}
  },
  /**
   * 页面渲染前需要请求一些初始化的数据
   * @param  {[type]}   to   [description]
   * @param  {[type]}   from [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  beforeRouteEnter (to, from, next) {
    next()
    // setTimeout(() => {
    //   console.log('xxx:', to, from)
    //   next()
    // }, 20)
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  @apply flex;
  @apply flex-col;
  @apply min-h-screen;
}
</style>
