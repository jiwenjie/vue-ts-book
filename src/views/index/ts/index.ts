import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component({
  name: 'index',
  components: {},
})
export default class IndexPage extends Vue {
  private value: string = "";

  created(): void {

  }

  // lifecycle hook
  mounted(): void {

  }

  // method
  private handleLogin() {

  }
}