import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator'
import { Banner } from '@/beans/index'  // 首页banner图
@Component({
  name: 'Swiper',
  components: {},
})
export default class IndexPage extends Vue {
  @Prop({ default: 6000 }) private timeout: number;  // 默认的切换banner图的时长
  @Prop({ default: 400 }) private height: number | string;  // banner区域高度
  @Prop({ default: () => [] }) private bannerList: Banner[];  // 传入的图片数组
  @Prop({ default: 'imagePath' }) private nameField: string;  // 图片地址对应的字段名
  @Prop({ default: true }) private showPagination: boolean; // 是否显示底部原点分页器
  @Prop({ default: false }) private showBtn: boolean; // 是否显示左右的切换按钮
  @Prop({
    default: 'fade', validator: function (value) {
      let arr = ['fade', 'translate']
      return arr.includes(value);
  } }) private animation: string; // 是否显示左右的切换按钮

  private timer: any;
  private curIndex: number = 0;

  created(): void {
    this.autoPlay()
  }

  // lifecycle hook
  mounted(): void {

  }

  // method
  private handleSelect() {

  }

  // 自动播放图片
  private autoPlay() {
    clearInterval(this.timer)//还是一样，开启定时器之前需要先清除一下，防止bug
    this.timer = setInterval(this.nextClick, this.timeout as number)
  }

  // 切换下一个 banner 图片
  private nextClick() {
    this.curIndex++;
    if (this.curIndex >= this.bannerList.length) {
      this.curIndex = 0;
    }
  }

  // 切换上一个图片
  private preClick() {
    this.curIndex++;
    if (this.curIndex >= this.bannerList.length) {
      this.curIndex = 0;
    }
  }

  // 暂停的方法
  private suspend() {
    clearInterval(this.timer)
  }

  // 点击底部原点按钮调整方法
  private jump(bannerItem: Banner, index: number) {
    this.curIndex = index;
  }

  // private animationMethodValidator(): string {

  // }
}
