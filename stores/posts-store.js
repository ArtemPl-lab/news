import { makeAutoObservable } from "mobx"
class PostsStore {
  posts = [
    {
        url: 'url-1',
        date: 'September 14, 2016',
        title: 'Название',
        text: 'Бла-бла-бла'
    },
    {
        url: 'url-2',
        date: 'September 14, 2016',
        title: 'Названdffffffffие',
        text: 'Бла-dsfgdfgбла-бла'
    },
    {
        url: 'url-5',
        date: 'September 14, 2016',
        title: 'Названиеusjgnjdfsn',
        text: 'Бла-бла-блsdsfgа'
    }
  ];
  page = 1;
  constructor() {
    makeAutoObservable(this)
  }
  async loadPosts(){
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
    console.log(json);
  }
}
const postsStore = new PostsStore();
export default postsStore;