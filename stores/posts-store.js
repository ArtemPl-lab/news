import { makeAutoObservable } from "mobx"
class PostsStore {
  posts = [];
  havePosts = true;
  page = 1;
  load = false;
  constructor() {
    makeAutoObservable(this)
  }
  async loadPosts(){
    if((!this.load && this.havePosts)){
      this.load = true;
      const response = await fetch('/api/news/news',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              page: this.page
          })
      });
      const json = await response.json();
      if(!json.length) this.havePosts = false;
      let concatPosts = this.posts.concat(json);
      this.posts = [...new Set(concatPosts.map(JSON.stringify))].map(JSON.parse);
      this.page++;
      this.load = false;
    }
  }
}
const postsStore = new PostsStore();
export default postsStore;