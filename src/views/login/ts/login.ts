import {
  Component,
  Vue
} from 'vue-property-decorator'
  // 两种动画背景
  import LoginCanvas from '../login-canvas.vue'
  import LoginCanvas2 from '../login-canvas2.vue'

@Component({
  name: 'login',
  components: {
    LoginCanvas,
    LoginCanvas2
  },
})
export default class Login extends Vue {
  // 01 - 表示背景1，02 - 表示背景2
  private loginBgCanvas: string = '01';

  created(): void {
    this.loginBgCanvas = localStorage.getItem('canvas') || "01";
  }

  // lifecycle hook
  mounted(): void { 

  }

  // method
  private handleLogin() {

  }

  private switchClick() {
    if (this.loginBgCanvas === '01') {
      localStorage.setItem('canvas', '02')
    } else {
      localStorage.setItem('canvas', '01')
    }
    this.$message({
      message: "背景设置改变成功，重新刷新界面！",
      type: "success"
    });
  }
}