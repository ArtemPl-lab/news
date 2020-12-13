import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
import Head from 'next/head';
const PostPage  = ({ post }) => {
    const router = useRouter();
    const { postsStore } = useStore();
    const postContent = postsStore.posts.find(post => post.newsUrl === router.query.url) || post;
    if(!postContent) return <p>Страница не найдена</p>
    return (
        <>
            <Head>
                <title>{postContent.newsTitle}</title>
                <meta name="description" content={postContent.newsContent} />
            </Head>
            <Container>
                <h1>{postContent.newsTitle}</h1>
                <p>{postContent.date}</p>
                <p dangerouslySetInnerHTML={{__html: postContent.newsContent}}/>
            </Container>
        </>
    );
}
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch('http://localhost:5000/api/news/page',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            id: context.query.url
        })
    })
    const data = await res.json()
    console.log(data);
    // Pass data to the page via props
    return { props: { post: data } }
  }

export default observer(PostPage);