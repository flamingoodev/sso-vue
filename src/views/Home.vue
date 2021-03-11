<template>
  <el-container  class="container-body">
    <!--页面左侧菜单栏-->
    <el-aside :width="width" class="el-aside container-aside">
      个人中心
    </el-aside>
    <el-container>
      <!--页面顶部-->
      <el-header class="el-header container-header">
        111
      </el-header>
      <!--页面主体-->
      <el-main class="el-main container-main">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </el-main>
      <!--页面底部-->
      <el-footer class="el-footer container-footer">

      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import ContainerHeader from '@/layout/components/Header'
import ContainerFooter from '@/layout/components/Footer'
export default {
  components: {
    ContainerHeader,
    ContainerFooter
  },
  data () {
    return {
      isFullscreen: false,
      width: '200px',
      isCollapse: false
    }
  },
  methods: {
  },
  computed: {
    key() {
      return this.$route.path
    },
    breadcrumb () {
      return this.$route.meta.title
    }
  },
  created: function () {
  },
  mounted: function () {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.username = user
    }
  }
}
</script>

<style>
  .container-header {
    padding: 0 0;
    height: 200px;
  }
  .container-body {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .container-aside {
    text-align: left;
  }
  .container-main {
    height: 100%;
    width: 100%;
  }
  .container-footer {
    padding: 0 0;
    height: 200px;
  }
</style>
