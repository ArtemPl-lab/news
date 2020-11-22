import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
const PostPage  = () => {
    const router = useRouter();
    const { postsStore } = useStore();
    const postContent = postsStore.posts.find(post => post.newsUrl === router.query.url);
    if(!postContent) return <p>dfgdfg</p>
    return (
        <Container>
            <h1>{postContent.newsTitle}</h1>
            <p>{postContent.date}</p>
            <p>{postContent.newsContent}</p>
        </Container>
    );
}

export default observer(PostPage);