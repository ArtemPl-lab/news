import { makeAutoObservable } from "mobx"
class PostsStore {
  posts = [];
  page = 1;
  load = false;
  constructor() {
    makeAutoObservable(this)
  }
  async loadPosts(){
    if(!this.load){
      this.load = true;
      const response = await fetch('/api/news/news',{
          method: 'POST',
          body: JSON.stringify({
              page: this.page
          })
      });
      const json = await response.json();
      let concatPosts = this.posts.concat(json);
      this.posts = [...new Set(concatPosts.map(JSON.stringify))].map(JSON.parse);
      this.page++;
      this.load = false;
    }
  }
}
const postsStore = new PostsStore();
export default postsStore;