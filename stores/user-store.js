import { makeAutoObservable } from "mobx"
class PostsStore {
  userToken = "";
  constructor() {
    makeAutoObservable(this);
  }
  setToken(token){
      this.userToken = token;
  }
  getToken(){
      return this.token;
  }
}
const user = new PostsStore();
export default user;