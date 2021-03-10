<template>
  <el-container  class="container-body">
    <!--页面左侧菜单栏-->
    <el-aside class="el-aside container-aside">
    </el-aside>
    <el-container>
      <!--页面顶部-->
      <el-header class="el-header container-header">
      </el-header>
      <!--页面主体-->
      <el-main class="el-main container-main">
        <h1>首页</h1>
      </el-main>
      <!--页面底部-->
      <el-footer class="el-footer container-footer">
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      isFullscreen: false
    }
  },
  methods: {
    button () {
    }
  },
  computed: {
  },
  created: function () {
  },
  mounted: function () {
  }
}
</script>

<style>
</style>
