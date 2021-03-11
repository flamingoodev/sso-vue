<template>
  <div class="header">
    <div style="width: 18px; cursor: pointer;" @click.prevent="toggleSideBar">
    </div>
    <span>header</span>
  </div>
</template>

<script>
export default {
  props: ['isCollapse1'],
  data () {
    return {
      isCollapse: false,
      width: '300px'
    }
  },
  methods: {
    /**
     * 向父组件传值
     */
    toggleSideBar () {
      this.isCollapse = !this.isCollapse
      this.width = this.isCollapse ? '65px' : '200px'
      this.$emit('listenIsCollapse', this.isCollapse)
      this.$emit('listenWidth', this.width)
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
</style>
