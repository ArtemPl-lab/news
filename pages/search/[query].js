import { Container, Grid, Typography } from "@material-ui/core";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewsCard from "../../components/News/NewsCard";
const PostPage  = () => {
    const router = useRouter();
    console.log(router.query.query);
    const [posts, setPosts] = useState();
    useEffect(async () => {
        if(router.query.query){
            const response = await fetch('/api/news/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    newsTitle: router.query.query
                })
            });
            setPosts(await response.json());
        }
    },[router.query.query]);
    if(!posts) return <CircularProgress />
    return (
        <>
            <Container>
                <Typography>
                    <h1>Результаты поиска по запросу: {router.query.query}</h1>
                </Typography> 
            </Container>
            <Container>
                <Grid spacing={3} container>
                {posts.map(post => (
                    <Grid item xs={12} md={3} sm={6} key={post.url}>
                    <NewsCard post={post}/>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </>
    );
}

export default PostPage;