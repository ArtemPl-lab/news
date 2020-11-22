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
  loadPosts(){

  }
}
const postsStore = new PostsStore();
export default postsStore;