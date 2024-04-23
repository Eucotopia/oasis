import {useGetPostsQuery} from "@/feature/api/postApi";
import {PostDetail} from "@/components/post/PostDetail";
import {PageType} from "@/types";

const page: PageType = {
    current: 0,
    pageSize: 100
}
export default function PostList() {
    const {data: posts} = useGetPostsQuery(page)
    return (
        <>
            <ul>
                {posts?.data.map((post) => (
                    post.id && <li key={post.id}>
                        <PostDetail id={post.id} page={page}/>
                    </li>
                ))}
            </ul>
        </>
    )
}