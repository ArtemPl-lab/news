import { Container, Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
import { useInView } from 'react-intersection-observer';
import CircularProgress from '@material-ui/core/CircularProgress';
const Cards = () => {
    const { postsStore } = useStore();
    const { ref, inView} = useInView({ threshold: 0 });
    if(inView) postsStore.loadPosts();
    return(
    <Container>
        <Grid spacing={3} container>
          {postsStore.posts.map(post => {
            // if(post.isLiked) return <></>
            return(
              <Grid item xs={12} md={3} sm={6} key={post.url}>
                <NewsCard post={post}/>
              </Grid>
            );
          })}
        </Grid>
        <div ref={ref} style={{display: "flex", justifyContent: "center", paddingTop:"15px"}}>
          { postsStore.load ? <CircularProgress /> : "" }
        </div>
    </Container>
    );
}
export default observer(Cards);