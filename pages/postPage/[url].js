import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
const PostPage  = () => {
    const router = useRouter();
    const { postsStore } = useStore();
    const postContent = postsStore.posts.find(post => post.url === router.query.url);
    if(!postContent) return <p>dfgdfg</p>
    return (
        <Container>
            <h1>{postContent.title}</h1>
            <p>{postContent.date}</p>
            <p>{postContent.text}</p>
        </Container>
    );
}

export default observer(PostPage);