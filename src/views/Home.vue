<template>
  <el-container  class="container-body">
    <!--页面左侧菜单栏-->
    <el-aside :width="width" class="el-aside container-aside">
      <el-menu class="container-menu">
        <ContainerMenu :isCollapse="isCollapse"></ContainerMenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!--页面顶部-->
      <el-header class="el-header container-header">
        <el-button type="primary" class="button" @click="buttoncli">摁我全屏</el-button>
        <ContainerHeader @listenIsCollapse="handleIsCollapse" @listenWidth="handleWidth"></ContainerHeader>
      </el-header>
      <!--页面主体-->
      <el-main class="el-main container-main">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, index) in breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view/>
      </el-main>
      <!--页面底部-->
      <el-footer class="el-footer container-footer">
        <ContainerFooter></ContainerFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import ContainerHeader from '@/layout/components/Header'
import ContainerMenu from '@/layout/components/Menu'
import ContainerFooter from '@/layout/components/Footer'
import screenfull from 'screenfull'
export default {
  components: {
    ContainerHeader,
    ContainerMenu,
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
    buttoncli () {
      screenfull.toggle()
    },
    /**
       * 处理菜单折叠
       * @param childIsCollapse
       */
    handleIsCollapse: function (childIsCollapse) {
      this.isCollapse = childIsCollapse
    },
    /**
       * 处理菜单折叠后宽度改变
       * @param childWidth
       */
    handleWidth: function (childWidth) {
      this.width = childWidth
    }
  },
  computed: {
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
    color: #333;
    text-align: left;
  }
  .container-main {
  }
  .container-footer {
    padding: 0 0;
    height: 200px;
  }
</style>
