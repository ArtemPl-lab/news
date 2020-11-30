import { makeAutoObservable } from "mobx"
import { getCookie } from 'react-use-cookie';
import { setCookie } from 'react-use-cookie';
class PostsStore {
  posts = [];
  havePosts = true;
  page = 1;
  load = false;
  constructor() {
    makeAutoObservable(this)
  }
  togleLike(post){
    this.posts = this.posts.map(postI => {
      if(postI._id === post._id){
        postI.isLiked = !postI.isLiked;
      }
      return postI;
    });
    let likedLast = getCookie('likedPosts');
    likedLast = (likedLast ? likedLast : "[]");
    const likedJson = JSON.parse(likedLast);
    if(!post.isLiked){
      const currentLiked = likedJson.filter(el => el != post._id);
      setCookie('likedPosts', JSON.stringify(currentLiked));
    }
    else{
      const currentLiked = [...likedJson, post._id];
      setCookie('likedPosts', JSON.stringify(currentLiked));
    }
  }
  async loadPosts(){
    let likedLast = getCookie('likedPosts');
    likedLast = (likedLast ? likedLast : "[]");
    const likedJson = JSON.parse(likedLast);
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
      let json = await response.json();
      if(!json.length) {
        this.havePosts = false;
        this.load = false;
        return 0;
      };
      let likedPostsId = new Set(likedJson);
      json = json.map(news => ({...news, isLiked: likedPostsId.has(news._id)}));
      let concatPosts = this.posts.concat(json);
      this.posts = [...new Set(concatPosts.map(JSON.stringify))].map(JSON.parse);
      this.page++;
      this.load = false;
    }
  }
}
const postsStore = new PostsStore();
export default postsStore;