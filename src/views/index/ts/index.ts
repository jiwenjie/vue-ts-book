import {
  Component,
  Vue
} from 'vue-property-decorator'

import { Banner } from '@/beans/index'  // 首页banner图
import {getBanner} from '@/api/indexApi'

@Component({
  name: 'index',
  components: {},
})
export default class IndexPage extends Vue {
  private value: string = "";
  private bannerList: Banner[] = [];

  created(): void {
    this.getBannerList();
  }

  // lifecycle hook
  mounted(): void {

  }

  // method start

  /**
   * 获取首页 banner 图
   */
  private async getBannerList() {
    let arr = await getBanner()
    this.bannerList = arr.data;
  }
}
