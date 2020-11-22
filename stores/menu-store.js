import { makeAutoObservable } from "mobx"
class MenuStore {
  show = false;
  constructor() {
    makeAutoObservable(this)
  }
  togglePanel() {
    this.show = !this.show;
  }
  closePanel(){
    this.show = false;
  }
  openPanel(){
      this.show = true
  }
}
const menuStore = new MenuStore();
export default menuStore;