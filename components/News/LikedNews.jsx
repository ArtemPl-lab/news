import { Container, Grid, Typography } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { useInView } from 'react-intersection-observer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from "react";
import useCookie from 'react-use-cookie';
import { useStore } from "mobx-store-provider";
import { observer } from 'mobx-react';
const LikedNews = () => {
    const { postsStore } = useStore();
    const { ref, inView} = useInView({ threshold: 0 });
    const [posts, setPosts] = useCookie('likedPosts');
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(0);
    const loadData = async () => {
        if(posts){
            let cookiePosts = JSON.parse(posts);
            if(page*10 < cookiePosts.length)
            {
                console.log(page*10);
                console.log(cookiePosts.length);
                if(!load){
                    setLoad(true);
                    const currentPosts = cookiePosts.slice(page*10, page*10+10);
                    const response = await fetch('/api/news/likedNews', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({newsIdArray: currentPosts})
                    });
                    let json = await response.json();
                    json = json.map(news => ({...news, isLiked: true}));
                    json = [...new Set(json.map(JSON.stringify))].map(JSON.parse);
                    let globalPosts = json.concat(postsStore.posts);
                    globalPosts = [...new Set(globalPosts.map(JSON.stringify))].map(JSON.parse);
                    postsStore.posts = globalPosts;
                    setPage(page=>page+1);
                    setLoad(false);
                }
            }

        }
    }
    if(inView) loadData();

    return(
    <Container>
        {
            !postsStore.posts.length ?
            <Typography><p>Увы, у вас нет понравившихся новостей :(</p></Typography> :
            ""
        }
        <Grid spacing={3} container>
          {postsStore.posts.map(post => {
              if(posts.indexOf(post._id) != -1){
                  return(
                    <Grid item xs={12} md={3} sm={6} key={post.url}>
                        <NewsCard post={post}/>
                    </Grid>
                  )
              }
          }
          )}
        </Grid>
        <div ref={ref} style={{display: "flex", justifyContent: "center", paddingTop:"15px"}}>
          { load ? <CircularProgress /> : "" }
        </div>
    </Container>
    );
}
export default observer(LikedNews);