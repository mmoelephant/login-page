<template>
  <div>
    <div class="flash">
      <div class="meng"></div>
      <h1>为平凡,致认真</h1>
      <img src="../../public/img/logo.png" />
      <div class="clickbox" @click="showbox">
        <div class="inputbox">输入手机号</div>
        <div>登录</div>
      </div>
      <transition name="fade">
        <div v-show="fillshow" class="fillbox">
          <div @click="backto">返回</div>
          <div class="clickbox2" @click="showbox">
            <input type="text" v-model="username" placeholder="请输入手机号" />
            <transition name="fade2">
              <input
                v-show="passwordshow"
                type="text"
                v-model="password"
                placeholder="请输入6-16位密码"
              />
            </transition>
            <div @click="goon">
              {{ !passwordshow ? "继续" : "立即登录" }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fillshow: false,
      passwordshow: false,
      username: "",
      password: ""
    }
  },
  methods: {
    showbox() {
      this.fillshow = true;
    },
    backto() {
      this.fillshow = false;
    },
    goon() {
      if (this.username && this.username.length == 11) {
        this.passwordshow = true;
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.flash
  position relative
  width 100%
  height 100vh
  padding 0.25rem
  font-size 0.28rem
  background url(../../public/img/loginbck2.jpg) no-repeat left center
  background-size cover
  img
    position absolute
    left 50%
    top 3.5rem
    margin-left -25%
    display block
    width 50%
  .meng
    width 100%
    height 100%
    background rgba(240,240,240,0.5)
    box-shadow 0 0.02rem 0.2rem rgba(0,0,0,0.3)
  h1
    position absolute
    left 0
    top 2rem
    width 100%
    font-size 0.5rem
    font-weight normal
    text-align center
  .clickbox
    position absolute
    left 50%
    bottom 15%
    display flex
    flex-direction column
    align-items center
    justify-content flex-end
    margin-left -40%
    width 80%
    div
      width 100%
      height 0.88rem
      text-align center
      line-height 0.88rem
      background black
      color #fff
    div.inputbox
      margin-bottom 0.4rem
      text-align left
      text-indent 0.4rem
      background #fff
      color #000
.clickbox2
  display flex
  flex-direction column
  align-items center
  justify-content flex-end
  width 90%
  margin 0 auto
  div
    width 100%
    height 0.88rem
    margin-top 0.4rem
    text-align center
    line-height 0.88rem
    background black
    color #fff
  input
    margin-top 0.4rem
.fillbox
  position absolute
  left 0
  top 0
  z-index 3
  width 100%
  height 100%
  padding 0.4rem
  background #fff
  // border 1px red solid
.fade-enter-active, .fade-leave-active
  transition top 0.5s
.fade-enter, .fade-leave-to
  top 100vh
.fade-enter-to, .fade-leave
  top 0
.fade2-enter-active, .fade2-leave-active
  transition height 0.5s
.fade2-enter, .fade2-leave-to
  height 0
.fade2-enter-to, .fade2-leave
  height 0.88rem
</style>
