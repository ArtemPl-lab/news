import { Container, Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
const Cards = () => {
    const { postsStore } = useStore();
    return(
    <Container>
        <Grid spacing={3} container>
          {postsStore.posts.map(post => (
            <Grid item xs={12} md={3} sm={6} key={post.url}>
              {console.log(post)}
              <NewsCard post={post}/>
            </Grid>
          ))}
        </Grid>
        <button onClick={()=>postsStore.loadPosts()}>Загрузить Посты</button>
    </Container>
    );
}
export default observer(Cards);