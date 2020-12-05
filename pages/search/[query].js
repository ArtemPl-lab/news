import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const PostPage  = () => {
    const router = useRouter();
    console.log(router.query.query);
    const [posts, setPosts] = useState();
    useEffect(async () => {
        const response = await fetch('/api/news/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                newsTitle: router.query.query
            })
        });
        console.log(await response.json());
    },[router.query.query]);
    if(!posts) return <CircularProgress />
    return (
        <Container>
            {/* <Grid spacing={3} container>
            {postsStore.posts.map(post => (
                <Grid item xs={12} md={3} sm={6} key={post.url}>
                <NewsCard post={post}/>
                </Grid>
            ))}
            </Grid> */}
        </Container>
    );
}

export default PostPage;