<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="notification"
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClick">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {},
    clearTimer() {},
    createTimer() {}
  }
}
</script>

<style lang="less" scoped>
.notification{
  display: flex;
  background-color: #303030;
  color: #fff;
  align-items: center;
  padding: 20px;
  width: 280px;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  transition: all .3s;
  .content{
    padding: 0;
  }
  .btn{
    color: #ff4081;
    padding-left: 24px;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
