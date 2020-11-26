import { makeAutoObservable } from "mobx"
class AlertStore {
  alertShow = false;
  alertTitle = "Предупреждение";
  alertText = "Оповещение"; 
  type = "warning";
  constructor() {
    makeAutoObservable(this)
  }
  showAlert(options){
    this.alertTitle = options.title || "Предупреждение";
    this.alertText = options.desc || "Оповещение";
    this.type = options.type || "warning";
    this.alertShow = true;
  }
  hideAlert(){
      this.alertShow = false;
  }
  toggle(){
      this.alertShow = !this.alertShow;
  }
}
const alertStore = new AlertStore();
export default alertStore;