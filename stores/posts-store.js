import { makeAutoObservable } from "mobx"
class PostsStore {
  posts = [];
  page = 1;
  constructor() {
    makeAutoObservable(this)
  }
  async loadPosts(){
    const response = await fetch('/api/news/news',{
        method: 'POST',
        body: JSON.stringify({
            page: this.page
        })
    });
    const json = await response.json();
    let concatPosts = this.posts.concat(json);
    this.posts = [...new Set(concatPosts.map(JSON.stringify))].map(JSON.parse);
  }
}
const postsStore = new PostsStore();
export default postsStore;