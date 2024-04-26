'use client'

import AddPost from "@/components/post/AddPost";
import {Link} from "@nextui-org/link";
import {useGetPostsQuery} from "@/feature/api/postApi";

export default function BlogPage() {
    const {data: posts} = useGetPostsQuery({current: 0, pageSize: 10})
    if (posts === undefined) return null
    return (
        <div>
            <AddPost/>
            {
                posts.map((post, index) => {
                    return (
                        <Link href={`/blog/${post.id}`} key={index}>{post.title}</Link>
                    )
                })
            }
        </div>
    );
}
