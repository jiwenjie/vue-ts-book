import {
  Component,
  Vue
} from 'vue-property-decorator'
import { UserInfo, NavListItem } from "@/beans/index";

@Component({
  name: 'index',
  components: {},
})
export default class IndexPage extends Vue {

  private userInfo: UserInfo;
  private activeIndex: string = "0";
  private list: Array<NavListItem> = [
    {
      index: "1",
      path: "/index",
      name: "首页"
    },
    {
      index: "2",
      path: "/articles",
      name: "文章"
    },
    {
      index: "3",
      path: "/archive",
      name: "归档"
    },
    {
      index: "4",
      path: "/project",
      name: "项目"
    },
    {
      index: "5",
      path: "/timeline",
      name: "历程"
    },
    {
      index: "6",
      path: "/message",
      name: "留言"
    },
    {
      index: "7",
      path: "/about",
      name: "关于"
    }
  ];

  created(): void {

  }

  // lifecycle hook
  mounted(): void {

  }

  // method
  private handleSelect() {

  }
}