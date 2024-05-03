'use client'

import AddPost from "@/components/post/AddPost";
import {useGetPostsQuery} from "@/feature/api/postApi";

export default function BlogPage() {
    const {data: posts} = useGetPostsQuery({current: 0, pageSize: 20})
    if (posts === undefined) return null
    return (
        <div>
            <AddPost/>
        </div>
    );
}
