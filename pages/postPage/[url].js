import { useRouter } from 'next/router';
import Header from '../../components/Header';

const PostPage  = () => {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <Header />
            <h1>{router.query.url}</h1>
        </>
    );
}

export default PostPage;